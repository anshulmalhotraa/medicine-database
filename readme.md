# Medicine Information API

## About API

This API provides access to a comprehensive database of medicine information, including details such as brand names, generic names, dosage forms, contraindications, side effects, and more. The data is sourced from reliable sources and regularly updated to ensure accuracy.

## Features

- Retrieve detailed information about various medicines
- Search for medicines by brand name, generic name, or therapeutic class
- Filter and sort results based on different criteria
- Secure authentication for authorized access

## Getting Started

To use the API, you'll need to send HTTP request at the endpoint using proper HTTP request method

## Base URL

The base URL for the API is: `https://api.example.com/v1`

## Authentication

No authentication

## Endpoints

### Get /api/medicines/[id]

Retrieve detailed information about a specific medicine.

#### Response

```
{
  "brand_name": "Amoxil",
  "contraindications": "Hypersensitivity to penicillins.",
  "country_of_origin": "USA",
  "created_at": "2024-04-03 06:51:18",
  "dosage_form": "Capsule",
  "dosage_instructions": "500mg every 8 hours or 875mg every 12 hours, depending on the infection.",
  "generic_name": "Amoxicillin",
  "id": 1,
  "indications": "Bacterial infections, such as bronchitis, pneumonia, and ear infections.",
  "interactions": "Probenecid, oral contraceptives, methotrexate.",
  "manufacturer": "GlaxoSmithKline",
  "name": "Amoxicillin",
  "precautions": "Avoid alcoholic beverages while taking this medication.",
  "route_of_administration": "Oral",
  "side_effects": "Nausea, diarrhea, rash, hypersensitivity reactions.",
  "storage_instructions": "Store at room temperature, away from moisture and heat.",
  "strength": "500mg",
  "therapeutic_class": "Antibiotic",
  "updated_at": "2024-04-03 06:51:18",
  "warnings": "Use with caution in individuals with renal impairment."
}
```

### GET /api/medicines

Retrieves detailed list on information about all medicines.

```
[
  {
    "brand_name": "Amoxil",
    "contraindications": "Hypersensitivity to penicillins.",
    "country_of_origin": "USA",
    "created_at": "2024-04-03 06:51:18",
    "dosage_form": "Capsule",
    "dosage_instructions": "500mg every 8 hours or 875mg every 12 hours, depending on the infection.",
    "generic_name": "Amoxicillin",
    "id": 1,
    "indications": "Bacterial infections, such as bronchitis, pneumonia, and ear infections.",
    "interactions": "Probenecid, oral contraceptives, methotrexate.",
    "manufacturer": "GlaxoSmithKline",
    "name": "Amoxicillin",
    "precautions": "Avoid alcoholic beverages while taking this medication.",
    "route_of_administration": "Oral",
    "side_effects": "Nausea, diarrhea, rash, hypersensitivity reactions.",
    "storage_instructions": "Store at room temperature, away from moisture and heat.",
    "strength": "500mg",
    "therapeutic_class": "Antibiotic",
    "updated_at": "2024-04-03 06:51:18",
    "warnings": "Use with caution in individuals with renal impairment."
  },
  {
    "brand_name": "Lipitor",
    "contraindications": "Active liver disease, pregnancy, breastfeeding.",
    "country_of_origin": "USA",
    "created_at": "2024-04-03 06:51:18",
    "dosage_form": "Tablet",
    "dosage_instructions": "10-80mg once daily, depending on the desired LDL cholesterol level.",
    "generic_name": "Atorvastatin",
    "id": 2,
    "indications": "Hyperlipidemia, heterozygous familial hypercholesterolemia, coronary heart disease.",
    "interactions": "Erythromycin, itraconazole, cyclosporine, digoxin.",
    "manufacturer": "Pfizer",
    "name": "Atorvastatin",
    "precautions": "Monitor liver function tests.",
    "route_of_administration": "Oral",
    "side_effects": "Myalgia, constipation, abdominal pain, nausea.",
    "storage_instructions": "Store at room temperature, away from moisture and heat.",
    "strength": "10mg, 20mg, 40mg, 80mg",
    "therapeutic_class": "Statin",
    "updated_at": "2024-04-03 06:51:18",
    "warnings": "Use with caution in patients with renal impairment."
  }
]
```
