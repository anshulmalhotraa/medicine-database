"use client"

import React, { useState } from 'react';

const BMICalc = () => {
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(170);
    const [bmi, setBmi] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `https://dm3y42j2bl.execute-api.eu-west-1.amazonaws.com/dev/bmi?weight=${weight}&height=${height}`,
                {
                    method: 'GET',
                }
            );
            const data = await response.json();
            setBmi(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <form
                className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-bold mb-6">BMI Calculator</h1>

                <div className="mb-4">
                    <label htmlFor="weight" className="block font-bold mb-2">
                        Weight (kg)
                    </label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white rounded-md w-full p-2"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="height" className="block font-bold mb-2">
                        Height (cm)
                    </label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white rounded-md w-full p-2"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md w-full"
                >
                    Calculate BMI
                </button>

                {bmi && (
                    <div>
                        <div className="mt-4 text-center">
                            Your BMI is: <span className="font-bold">{bmi.bmi.toFixed(5)}</span>
                        </div>
                        <div className="mt-4 text-center">
                            Your BMI is: <span className="font-bold">{bmi.interpretation}</span>
                        </div>
                    </div>

                )}
            </form>
        </div>
    );
};

export default BMICalc;