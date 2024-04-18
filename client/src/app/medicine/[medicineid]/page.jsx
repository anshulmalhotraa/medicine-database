"use client";
import React, { useEffect, useState } from "react";
import { API_URL } from "@/lib/constants";
import LoadingScreen from "@/components/Loading";

const MedicinePage = ({ params }) => {
  const medicineid = params.medicineid;
  const [medicine, setMedicine] = useState();

  useEffect(() => {
    fetch(`${API_URL}/api/medicines/${medicineid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMedicine(data);
      });
  }, [medicineid]);

  if (!medicine) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">
          {medicine.brand_name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Generic Name
            </h2>
            <p className="text-gray-600 mb-4">{medicine.generic_name}</p>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Dosage Form
            </h2>
            <p className="text-gray-600 mb-4">{medicine.dosage_form}</p>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Route of Administration
            </h2>
            <p className="text-gray-600 mb-4">
              {medicine.route_of_administration}
            </p>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Therapeutic Class
            </h2>
            <p className="text-gray-600 mb-4">{medicine.therapeutic_class}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Indications
            </h2>
            <p className="text-gray-600 mb-4">{medicine.indications}</p>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Dosage Instructions
            </h2>
            <p className="text-gray-600 mb-4">{medicine.dosage_instructions}</p>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Contraindications
            </h2>
            <p className="text-gray-600 mb-4">{medicine.contraindications}</p>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Precautions
            </h2>
            <p className="text-gray-600 mb-4">{medicine.precautions}</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Interactions
          </h2>
          <p className="text-gray-600 mb-4">{medicine.interactions}</p>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Side Effects
          </h2>
          <p className="text-gray-600 mb-4">{medicine.side_effects}</p>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Storage Instructions
          </h2>
          <p className="text-gray-600 mb-4">{medicine.storage_instructions}</p>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Warnings</h2>
          <p className="text-gray-600 mb-4">{medicine.warnings}</p>
        </div>
      </div>
    </div>
  );
};

export default MedicinePage;