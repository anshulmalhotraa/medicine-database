"use client"

import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
            <div className="relative">
                <div className="w-16 h-16 border-8 border-blue-400 border-double rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    Loading...
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;