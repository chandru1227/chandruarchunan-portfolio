import React, { useState, useRef, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("lRqpH1HeksKkC5RWH"); // Replace with your actual EmailJS public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // EmailJS parameters
    const serviceId = "service_zpqa1x5"; // Replace with your EmailJS service ID
    const templateId = "template_tjxspdr"; // Replace with your EmailJS template ID
    
    // Prepare template parameters based on your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Chandru A", // Your name as the recipient
      reply_to: formData.email
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setSuccess(true);
        
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setLoading(false);
        setError(true);
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white py-16"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8 animate-fadeIn">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Contact
          </p>
          <p className="py-6 text-gray-300">Let's connect! Submit the form below to get in touch with me</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Contact Info */}
          <div className="w-full md:w-1/3 animate-slideRight">
            <div className="flex flex-col gap-6">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-blue-400/10 transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <FaEnvelope className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-300">Email</h3>
                    <p className="text-blue-400">chandruarchunan04@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-blue-400/10 transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <FaPhone className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-300">Phone</h3>
                    <p className="text-blue-400">+91 9566308639</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-blue-400/10 transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <FaMapMarkerAlt className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-300">Location</h3>
                    <p className="text-blue-400">Erode, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full md:w-2/3 animate-slideLeft">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="mb-2">
                <label htmlFor="name" className="text-sm text-gray-400 block mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white w-full focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  required
                />
              </div>
              
              <div className="mb-2">
                <label htmlFor="email" className="text-sm text-gray-400 block mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="abc@example.com"
                  className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white w-full focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  required
                />
              </div>
              
              <div className="mb-2">
                <label htmlFor="message" className="text-sm text-gray-400 block mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="6"
                  className="p-3 bg-gray-800 border border-gray-700 rounded-md text-white w-full focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                  required
                ></textarea>
              </div>

              {success && (
                <div className="bg-green-500/20 border border-green-500 text-green-300 p-3 rounded-md">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-md">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button 
                type="submit"
                disabled={loading}
                className={`text-white bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 mt-4 rounded-md hover:from-blue-600 hover:to-blue-800 transition-colors duration-300 font-medium flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;