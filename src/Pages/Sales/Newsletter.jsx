import React from "react";

const Newsletter = () => {
    return (
        <section className="py-10 flex flex-col items-center text-center px-4">
            <h3 className="text-2xl font-semibold text-green-900 mb-2">
                Stay Updated
            </h3>
            <p className="text-green-800 mb-4 text-sm md:text-base max-w-md">
                Subscribe to receive the latest news and articles directly in your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-2 w-full max-w-sm">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="px-3 py-2 rounded border border-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 flex-1 text-green-900"
                />
                <button
                    type="submit"
                    className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                >
                    Subscribe
                </button>
            </form>
        </section>
    );
};

export default Newsletter;
