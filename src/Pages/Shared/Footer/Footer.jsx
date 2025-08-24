import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-neutral-900 text-neutral-200 pt-12 pb-6 mt-auto">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Info */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">Newsly</h2>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        Your trusted source for the latest news, articles, and insights.
                        Stay informed with accurate and timely reporting.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                        <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/world" className="hover:text-white transition">World News</a></li>
                        <li><a href="/politics" className="hover:text-white transition">Politics</a></li>
                        <li><a href="/technology" className="hover:text-white transition">Technology</a></li>
                        <li><a href="/sports" className="hover:text-white transition">Sports</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 flex-1"
                        />
                        <button
                            type="submit"
                            className="bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded transition"
                        >
                            Subscribe
                        </button>
                    </form>
                    <div className="flex gap-4 text-lg mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><FaTwitter /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaGithub /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 border-t border-neutral-800 pt-4 text-center text-sm text-neutral-500">
                © {new Date().getFullYear()} Newsly. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
