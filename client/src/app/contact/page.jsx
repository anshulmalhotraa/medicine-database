import React from 'react';

const ContactForm = () => {
    return (
        <div className="bg-gray-900 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white mb-8">Contact Us</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-400 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            required
                            disabled
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-400 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            required
                            disabled
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-400 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            required
                            disabled
                        ></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;