import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [popup, setPopup] = useState({
        show: false,
        success: false,
        message: ''
    });

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    };

    const showPopup = (success, message) => {
        setPopup({
            show: true,
            success,
            message
        });
        
        setTimeout(() => {
            setPopup(prev => ({ ...prev, show: false }));
        }, 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            const response = await fetch('https://myportfolio-2-u09u.onrender.com/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                showPopup(true, 'Message sent successfully! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const errorData = await response.json();
                showPopup(false, errorData.message || 'Failed to send message. Please try again later.');
            }
        } catch (error) {
            showPopup(false, 'Network error. Please check your connection and try again.');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div id='contact' className="w-full relative py-16 px-6 lg:px-0 bg-gradient-to-br from-[#0E1627] to-[#1a2a4a] font-poppins">
                <div className="max-w-[1140px] container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Left Side - Form */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                                <div>
                                    <label className="block mb-2 font-medium text-white">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                    />
                                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium text-white">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium text-white">Message</label>
                                    <textarea
                                        name="message"
                                        className="w-full bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message here..."
                                    />
                                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Send Message'}
                                </button>
                            </form>

                            <div className="mt-8">
                                <p className="text-white/80 mb-4">Or reach me directly via:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <FaEnvelope className="w-5 h-5 text-blue-400 mr-3" />
                                        <a href="mailto:arsalandanish0903@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline transition">arsalandanish0903@gmail.com</a>
                                    </li>
                                    <li className="flex items-center">
                                        <FaLinkedin className="w-5 h-5 text-blue-400 mr-3" />
                                        <a href="https://www.linkedin.com/in/arsalan-danish-a9a9ab226" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition">LinkedIn Profile</a>
                                    </li>
                                    <li className="flex items-center">
                                        <FaGithub className="w-5 h-5 text-blue-400 mr-3" />
                                        <a href="https://github.com/arsalandanish0903" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition">GitHub Profile</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="w-full lg:w-1/2 hidden lg:block">
                            <div className="relative h-full min-h-[500px] rounded-xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-700/30 z-10"></div>
                                <img 
                                    src="/contactForm-removebg-preview.png" 
                                    alt="Contact illustration"
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                    <h3 className="text-2xl font-bold text-white mb-2">Let's Build Something Amazing</h3>
                                    <p className="text-white/90">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Notification */}
            {popup.show && (
                <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${popup.show ? 'animate-fade-in-up' : 'animate-fade-out-down'}`}>
                    <div className={`flex items-center p-4 rounded-lg shadow-xl ${popup.success ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'}`}>
                        <div className="mr-3">
                            {popup.success ? (
                                <FaCheckCircle className="w-6 h-6" />
                            ) : (
                                <FaTimesCircle className="w-6 h-6" />
                            )}
                        </div>
                        <div>
                            <p className="font-medium">{popup.message}</p>
                        </div>
                        <button 
                            onClick={() => setPopup(prev => ({ ...prev, show: false }))}
                            className="ml-4 text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Contact;