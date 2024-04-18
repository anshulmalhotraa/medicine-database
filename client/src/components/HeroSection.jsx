import { APP_NAME } from '@/lib/constants';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="bg-gray-900 py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                        Welcome to {APP_NAME}
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-gray-400 sm:text-lg lg:text-xl">
                        We are a team of experienced professionals dedicated to providing
                        high-quality products and services to our clients.
                    </p>
                    <div className="mt-10">
                        <a
                            href="#"
                            className="inline-block bg-white text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;