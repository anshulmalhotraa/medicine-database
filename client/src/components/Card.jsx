import Link from 'next/link';
import React from 'react';

const Card = ({ medicine }) => {
    return (
        <>
            <Link href={`/medicine/${medicine.id}`}>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold mb-2">{medicine.brand_name}</h2>
                    <p className="text-gray-600 mb-1">
                        Generic Name: {medicine.generic_name}
                    </p>
                    <p className="text-gray-600 mb-1">
                        Dosage Form: {medicine.dosage_form}
                    </p>
                    <p className="text-gray-600 mb-1">
                        Route of Administration: {medicine.route_of_administration}
                    </p>
                    <p className="text-gray-600 mb-1">
                        Therapeutic Class: {medicine.therapeutic_class}
                    </p>
                </div>
            </Link >
        </>
    );
};

export default Card;