"use client";
import Card from "@/components/Card";
import { API_URL } from "@/lib/constants";
import React, { useEffect, useState } from "react";

const MedicinesPage = () => {
    const [dosageFilter, setDosageFilter] = useState("");
    const [routeFilter, setRouteFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([]);
    const [showEmailField, setShowEmailField] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/api/medicines`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    const dosageFormOptions = [
        { value: "Tablet", label: "Tablet" },
        { value: "Capsule", label: "Capsule" },
        { value: "Syrup", label: "Syrup" },
        { value: "Suspension", label: "Suspension" },
        { value: "Solution", label: "Solution" },
        { value: "Injection", label: "Injection" },
        { value: "Cream", label: "Cream" },
        { value: "Ointment", label: "Ointment" },
        { value: "Gel", label: "Gel" },
        { value: "Patch", label: "Patch" },
        { value: "Suppository", label: "Suppository" },
        { value: "Implant", label: "Implant" },
        { value: "Powder", label: "Powder" },
        { value: "Granules", label: "Granules" },
        { value: "Drops", label: "Drops" },
        { value: "Spray", label: "Spray" },
        { value: "Inhaler", label: "Inhaler" },
        { value: "Nasal Spray", label: "Nasal Spray" },
        { value: "Sublingual Tablet/Film", label: "Sublingual Tablet/Film" },
    ];

    const routeOfAdministrationOptions = [
        { value: "Oral", label: "Oral" },
        { value: "Intravenous (IV)", label: "Intravenous (IV)" },
        { value: "Intramuscular (IM)", label: "Intramuscular (IM)" },
        { value: "Subcutaneous (SC)", label: "Subcutaneous (SC)" },
        { value: "Topical", label: "Topical" },
        { value: "Transdermal", label: "Transdermal" },
        { value: "Ophthalmic (Eye)", label: "Ophthalmic (Eye)" },
        { value: "Otic (Ear)", label: "Otic (Ear)" },
        { value: "Nasal", label: "Nasal" },
        { value: "Inhalation", label: "Inhalation" },
        { value: "Rectal", label: "Rectal" },
        { value: "Vaginal", label: "Vaginal" },
        { value: "Sublingual", label: "Sublingual" },
        { value: "Buccal", label: "Buccal" },
        { value: "Intranasal", label: "Intranasal" },
        { value: "Epidural", label: "Epidural" },
        { value: "Intrathecal", label: "Intrathecal" },
        { value: "Intradermal", label: "Intradermal" },
        { value: "Intravesical", label: "Intravesical" },
        { value: "Intra-articular", label: "Intra-articular" },
    ];

    const filteredData = data.filter(
        (medicine) =>
            medicine.dosage_form.includes(dosageFilter) &&
            medicine.route_of_administration.includes(routeFilter) &&
            (medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                medicine.brand_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                medicine.generic_name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleSendData = () => {
        const data = {
            emailid: email,
            medicine: filteredData,
        };
        fetch(`${API_URL}/queue`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                console.log("Data sent successfully");
                console.log(response.json());
                setShowEmailField(false);
                setEmail("");
            })
            .catch((error) => {
                console.error("Error sending data:", error);
            });
    };

    const handleDosageFilterChange = (event) => {
        setDosageFilter(event.target.value);
    };

    const handleRouteFilterChange = (event) => {
        setRouteFilter(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="container mx-auto py-8">
            <div className="mb-4">
                <label htmlFor="searchQuery" className="mr-2">
                    Search:
                </label>
                <input
                    type="text"
                    id="searchQuery"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <label htmlFor="dosageFilter" className="ml-4 mr-2">
                    Dosage Form:
                </label>
                <select
                    id="dosageFilter"
                    value={dosageFilter}
                    onChange={handleDosageFilterChange}
                    className="border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">Select Dosage Form</option>
                    {dosageFormOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <label htmlFor="routeFilter" className="ml-4 mr-2">
                    Route of Administration:
                </label>
                <select
                    id="routeFilter"
                    value={routeFilter}
                    onChange={handleRouteFilterChange}
                    className="border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">Select Route of Administration</option>
                    {routeOfAdministrationOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <button
                    onClick={() => setShowEmailField(!showEmailField)}
                    className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Send me data
                </button>
                {showEmailField && (
                    <div className="mt-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded px-2 py-1"
                        />
                        <button
                            onClick={handleSendData}
                            className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Send
                        </button>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredData.map((medicine) => (
                    <Card key={medicine.id} medicine={medicine} />
                ))}
            </div>
        </div>
    );
};

export default MedicinesPage;
