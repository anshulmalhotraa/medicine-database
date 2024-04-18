import { APP_NAME } from '@/lib/constants';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <a href="#" className="text-white font-bold text-2xl">
                            {APP_NAME}
                        </a>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white">
                            Home
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            About
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            Services
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                    &copy; 2023 {APP_NAME}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;