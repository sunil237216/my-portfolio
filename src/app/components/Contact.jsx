'use client';
import React, { useState } from 'react';
import { assets } from '../../../assets/assets';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    message: '',
    type: '' // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          message: 'Thank you! Your message has been sent successfully.',
          type: 'success'
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ loading: false, message: '', type: '' });
        }, 5000);
      } else {
        setStatus({
          loading: false,
          message: data.error || 'Failed to send message. Please try again.',
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        loading: false,
        message: 'An error occurred. Please try again later.',
        type: 'error'
      });
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-center bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Get in Touch</h4>
        <h2 className='text-center text-5xl font-Ovo'>Contact Me</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I would love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
        </p>
        
        {/* Status Message */}
        {status.message && (
          <div className={`max-w-2xl mx-auto mb-6 p-4 rounded-lg ${
            status.type === 'success' 
              ? 'bg-green-100 border border-green-400 text-green-700' 
              : 'bg-red-100 border border-red-400 text-red-700'
          }`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
              <input 
                type='text' 
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter Your Name' 
                required
                disabled={status.loading}
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed' 
              />
              <input 
                type='email' 
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter Your Email' 
                required
                disabled={status.loading}
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed' 
              />
            </div>
            <textarea 
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Enter Your Message' 
              required
              rows='6'
              disabled={status.loading}
              className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            ></textarea>
            
            <button 
              type='submit' 
              disabled={status.loading}
              className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {status.loading ? (
                <>
                  <span>Sending...</span>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </>
              ) : (
                <>
                  Send Message 
                  <Image src={assets.right_arrow_white} alt='Send Message'/>
                </>
              )}
            </button>
        </form>
    </div>
  )
}

export default Contact