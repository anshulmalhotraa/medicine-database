import sqlite3
import boto3
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from thefuzz import process

app = Flask(__name__)
CORS(app, resources={"*": {"origins": "*"}})

def get_db_connection():
    conn = sqlite3.connect('pharma.db')
    conn.row_factory = sqlite3.Row
    return conn

def create_medicine_table():
    conn = get_db_connection()
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS Medicine (
                 id INTEGER PRIMARY KEY AUTOINCREMENT,
                 name TEXT NOT NULL,
                 brand_name TEXT,
                 generic_name TEXT,
                 dosage_form TEXT,
                 strength TEXT,
                 route_of_administration TEXT,
                 therapeutic_class TEXT,
                 indications TEXT,
                 contraindications TEXT,
                 side_effects TEXT,
                 interactions TEXT,
                 warnings TEXT,
                 precautions TEXT,
                 dosage_instructions TEXT,
                 storage_instructions TEXT,
                 manufacturer TEXT,
                 country_of_origin TEXT,
                 created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                 updated_at TEXT DEFAULT CURRENT_TIMESTAMP
                 )''')
    conn.commit()
    conn.close()

# Helper Functions
def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

@app.route('/api/medicines/search', methods=['GET'])
def search_medicines():
    conn = get_db_connection()
    conn.row_factory = dict_factory
    cur = conn.cursor()
    cur.execute("SELECT id, name, brand_name, generic_name FROM Medicine")
    medicines = cur.fetchall()
    conn.close()

    query = request.args.get('q', '')
    if not query:
        return jsonify([])

    choices = [f"{medicine['name']} ({medicine['brand_name']} / {medicine['generic_name']})" for medicine in medicines]
    matches = process.extract(query, choices, limit=10)

    result = []
    for match in matches:
        name, brand_name, generic_name = match[0].split(' (')[0], match[0].split(' (')[1].split(' / ')[0], match[0].split(' / ')[1][:-1]
        conn = get_db_connection()
        conn.row_factory = dict_factory
        cur = conn.cursor()
        cur.execute("SELECT * FROM Medicine WHERE name = ? OR brand_name = ? OR generic_name = ?", (name, brand_name, generic_name))
        medicine = cur.fetchone()
        conn.close()
        if medicine:
            result.append(medicine)

    return jsonify(result)

# Routes
@app.route('/api/medicines', methods=['GET'])
def get_medicines():
    conn = get_db_connection()
    conn.row_factory = dict_factory
    cur = conn.cursor()
    cur.execute("SELECT * FROM Medicine")
    medicines = cur.fetchall()
    conn.close()
    return jsonify(medicines)

@app.route('/api/medicines/<int:id>', methods=['GET'])
def get_medicine(id):
    conn = get_db_connection()
    conn.row_factory = dict_factory
    cur = conn.cursor()
    cur.execute("SELECT * FROM Medicine WHERE id = ?", (id,))
    medicine = cur.fetchone()
    conn.close()
    if medicine:
        return jsonify(medicine)
    else:
        return jsonify({'error': 'Medicine not found'}), 404

@app.route('/api/medicines', methods=['POST'])
def create_medicine():
    data = request.get_json()
    required_fields = ['name', 'brand_name', 'generic_name', 'dosage_form', 'strength', 'route_of_administration', 'therapeutic_class']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'{field} is required'}), 400
        
    print(data)
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO Medicine (name, brand_name, generic_name, dosage_form, strength, route_of_administration, therapeutic_class, indications, contraindications, side_effects, interactions, warnings, precautions, dosage_instructions, storage_instructions, manufacturer, country_of_origin, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    """, (data['name'], data['brand_name'], data['generic_name'], data['dosage_form'], data['strength'], data['route_of_administration'], data['therapeutic_class'], data.get('indications'), data.get('contraindications'), data.get('side_effects'), data.get('interactions'), data.get('warnings'), data.get('precautions'), data.get('dosage_instructions'), data.get('storage_instructions'), data.get('manufacturer'), data.get('country_of_origin')))
    conn.commit()
    medicine_id = cur.lastrowid
    conn.close()
    return jsonify({'message': 'Medicine created successfully', 'id': medicine_id}), 200

@app.route('/api/medicines/<int:id>', methods=['PUT'])
def update_medicine(id):
    data = request.get_json()
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Medicine WHERE id = ?", (id,))
    medicine = cur.fetchone()
    if not medicine:
        conn.close()
        return jsonify({'error': 'Medicine not found'}), 404

    update_fields = []
    values = []
    for key, value in data.items():
        if key != 'id':
            update_fields.append(f"{key} = ?")
            values.append(value)

    if not update_fields:
        conn.close()
        return jsonify({'error': 'No data provided for update'}), 400

    values.append(id)
    update_query = "UPDATE Medicine SET " + ", ".join(update_fields) + " WHERE id = ?"
    cur.execute(update_query, values)
    cur.execute("UPDATE Medicine SET updated_at = CURRENT_TIMESTAMP WHERE id = ?", (id,))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Medicine updated successfully'})

@app.route('/api/medicines/<int:id>', methods=['DELETE'])
def delete_medicine(id):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Medicine WHERE id = ?", (id,))
    medicine = cur.fetchone()
    if not medicine:
        conn.close()
        return jsonify({'error': 'Medicine not found'}), 404

    cur.execute("DELETE FROM Medicine WHERE id = ?", (id,))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Medicine deleted successfully'})



@app.route('/queue', methods=['POST'])
def add_to_queue():
    
    body = request.data
    message_data = json.loads(body)
    
    sqs = boto3.client(
        'sqs', region_name='eu-west-1'
    )
    
    queue_url = 'https://sqs.eu-west-1.amazonaws.com/250738637992/x23116889-Medicine'
    response = sqs.send_message(QueueUrl=queue_url,DelaySeconds=10, MessageBody=json.dumps(message_data))
    
    return {'messageid' : str(response['MessageId'])}

if __name__ == '__main__':
    create_medicine_table()
    app.run(debug=True, port=8000, host='0.0.0.0')