import React, { useState } from 'react';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = {
            ...formData,
            name: formData.name ? formData.name : "Unknown"
        }
        console.log('Form Data:', finalData);
    };

    return (
        <div className="bg-[#EDE8D0] h-screen w-full  text-black">
            <div className="p-6 w-full flex items-start justify-around shadow-lg rounded-2xl mt-10">
                <div className='flex flex-col items-start w-1/2 justify-center'>
                    <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-6">Contact Us</h2>
                    <p className='text-xl text-black font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis totam sequi impedit sapiente accusamus fugit voluptatum assumenda nobis facere. Esse itaque iure cum numquam aperiam similique assumenda laudantium odit fugiat.</p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-bold">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-[500px] p-3 border-b-2 border-gray-400  focus:border-black outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold">Phone</label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-[500px] p-3 border-b-2 border-gray-400  focus:border-black outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-[500px] p-3 border-b-2 border-gray-400 focus:border-black outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Message</label>
                        <textarea
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-[500px] p-3 border-b-2 border-gray-400 focus:border-black outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-black transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
