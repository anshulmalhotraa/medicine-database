"use client"

import { useState, useEffect } from 'react';

const HealthDataTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.healthit.gov/data/open-api?source=2015-edition-market-readiness-hospitals-clinicians-data.csv');
                const json = await response.json()
                const sliced = json.slice(0, 50);
                setData(sliced);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto my-10">
            {data.length > 0 ? <table className="table-auto w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Provider Type</th>
                        <th className="px-4 py-2">Developer</th>
                        <th className="px-4 py-2">Provider Count</th>
                        <th className="px-4 py-2">Market Share</th>
                        <th className="px-4 py-2">Estimated MIPS 2018</th>
                        <th className="px-4 py-2">Edition 2015 Base Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                            <td className="border px-4 py-2">{item.provider_type}</td>
                            <td className="border px-4 py-2">{item.developer}</td>
                            <td className="border px-4 py-2">{item.provider_count}</td>
                            <td className="border px-4 py-2">{item.mktShare}</td>
                            <td className="border px-4 py-2">{item.est_mips_2018}</td>
                            <td className="border px-4 py-2">{item.edition2015_base_status}</td>
                        </tr>
                    ))}
                </tbody>
            </table> : <div>Loading Data.... </div>
            }
        </div>
    );
};

export default HealthDataTable;