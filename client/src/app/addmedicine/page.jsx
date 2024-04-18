"use client"

import React, { useState } from 'react';
import { API_URL } from '@/lib/constants';
import Select from 'react-select';

const MedicineForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        brand_name: '',
        generic_name: '',
        dosage_form: '',
        strength: '',
        route_of_administration: '',
        therapeutic_class: '',
        indications: '',
        contraindications: '',
        side_effects: '',
        interactions: '',
        warnings: '',
        precautions: '',
        dosage_instructions: '',
        storage_instructions: '',
        manufacturer: '',
        country_of_origin: '',
    });

    const dosageFormOptions = [
        { value: 'Tablet', label: 'Tablet' },
        { value: 'Capsule', label: 'Capsule' },
        { value: 'Syrup', label: 'Syrup' },
        { value: 'Suspension', label: 'Suspension' },
        { value: 'Solution', label: 'Solution' },
        { value: 'Injection', label: 'Injection' },
        { value: 'Cream', label: 'Cream' },
        { value: 'Ointment', label: 'Ointment' },
        { value: 'Gel', label: 'Gel' },
        { value: 'Patch', label: 'Patch' },
        { value: 'Suppository', label: 'Suppository' },
        { value: 'Implant', label: 'Implant' },
        { value: 'Powder', label: 'Powder' },
        { value: 'Granules', label: 'Granules' },
        { value: 'Drops', label: 'Drops' },
        { value: 'Spray', label: 'Spray' },
        { value: 'Inhaler', label: 'Inhaler' },
        { value: 'Nasal Spray', label: 'Nasal Spray' },
        { value: 'Sublingual Tablet/Film', label: 'Sublingual Tablet/Film' },
    ];

    const routeOfAdministrationOptions = [
        { value: 'Oral', label: 'Oral' },
        { value: 'Intravenous (IV)', label: 'Intravenous (IV)' },
        { value: 'Intramuscular (IM)', label: 'Intramuscular (IM)' },
        { value: 'Subcutaneous (SC)', label: 'Subcutaneous (SC)' },
        { value: 'Topical', label: 'Topical' },
        { value: 'Transdermal', label: 'Transdermal' },
        { value: 'Ophthalmic (Eye)', label: 'Ophthalmic (Eye)' },
        { value: 'Otic (Ear)', label: 'Otic (Ear)' },
        { value: 'Nasal', label: 'Nasal' },
        { value: 'Inhalation', label: 'Inhalation' },
        { value: 'Rectal', label: 'Rectal' },
        { value: 'Vaginal', label: 'Vaginal' },
        { value: 'Sublingual', label: 'Sublingual' },
        { value: 'Buccal', label: 'Buccal' },
        { value: 'Intranasal', label: 'Intranasal' },
        { value: 'Epidural', label: 'Epidural' },
        { value: 'Intrathecal', label: 'Intrathecal' },
        { value: 'Intradermal', label: 'Intradermal' },
        { value: 'Intravesical', label: 'Intravesical' },
        { value: 'Intra-articular', label: 'Intra-articular' },
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (option, field) => {
        setFormData({ ...formData, [field]: option.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/api/medicines`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            setFormData({
                name: '',
                brand_name: '',
                generic_name: '',
                dosage_form: '',
                strength: '',
                route_of_administration: '',
                therapeutic_class: '',
                indications: '',
                contraindications: '',
                side_effects: '',
                interactions: '',
                warnings: '',
                precautions: '',
                dosage_instructions: '',
                storage_instructions: '',
                manufacturer: '',
                country_of_origin: '',
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Add Medicine</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="brand_name" className="block font-medium mb-2">
                                Brand Name
                            </label>
                            <input
                                type="text"
                                name="brand_name"
                                id="brand_name"
                                value={formData.brand_name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="generic_name" className="block font-medium mb-2">
                                Generic Name
                            </label>
                            <input
                                type="text"
                                name="generic_name"
                                id="generic_name"
                                value={formData.generic_name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label htmlFor="dosage_form" className="block font-medium mb-2">
                                Dosage Form
                            </label>
                            <Select
                                id="dosage_form"
                                name="dosage_form"
                                options={dosageFormOptions}
                                value={dosageFormOptions.find(option => option.value === formData.dosage_form)}
                                onChange={(option) => handleSelectChange(option, 'dosage_form')}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="strength" className="block font-medium mb-2">
                                Strength
                            </label>
                            <input
                                type="text"
                                name="strength"
                                id="strength"
                                value={formData.strength}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="route_of_administration" className="block font-medium mb-2">
                                Route of Administration
                            </label>
                            <Select
                                id="route_of_administration"
                                name="route_of_administration"
                                options={routeOfAdministrationOptions}
                                value={routeOfAdministrationOptions.find(option => option.value === formData.route_of_administration)}
                                onChange={(option) => handleSelectChange(option, 'route_of_administration')}
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="indications" className="block font-medium mb-2">
                            Indications
                        </label>
                        <textarea
                            name="indications"
                            id="indications"
                            value={formData.indications}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contraindications" className="block font-medium mb-2">
                            Contraindications
                        </label>
                        <textarea
                            name="contraindications"
                            id="contraindications"
                            value={formData.contraindications}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="side_effects" className="block font-medium mb-2">
                            Side Effects
                        </label>
                        <textarea
                            name="side_effects"
                            id="side_effects"
                            value={formData.side_effects}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="interactions" className="block font-medium mb-2">
                            Interactions
                        </label>
                        <textarea
                            name="interactions"
                            id="interactions"
                            value={formData.interactions}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="warnings" className="block font-medium mb-2">
                            Warnings
                        </label>
                        <textarea
                            name="warnings"
                            id="warnings"
                            value={formData.warnings}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="precautions" className="block font-medium mb-2">
                            Precautions
                        </label>
                        <textarea
                            name="precautions"
                            id="precautions"
                            value={formData.precautions}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dosage_instructions" className="block font-medium mb-2">
                            Dosage Instructions
                        </label>
                        <textarea
                            name="dosage_instructions"
                            id="dosage_instructions"
                            value={formData.dosage_instructions}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="storage_instructions" className="">
                            Storage Instructions
                        </label>
                        <textarea
                            name="storage_instructions"
                            id="storage_instructions"
                            value={formData.storage_instructions}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="manufacturer" className="block font-medium mb-2">
                            Manufacturer
                        </label>
                        <input
                            type="text"
                            name="manufacturer"
                            id="manufacturer"
                            value={formData.manufacturer}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country_of_origin" className="block font-medium mb-2">
                            Country of Origin
                        </label>
                        <input
                            type="text"
                            name="country_of_origin"
                            id="country_of_origin"
                            value={formData.country_of_origin}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MedicineForm;