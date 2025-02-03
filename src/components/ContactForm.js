import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // send email to brow1490@algonquinlive.com with emailJS account
        emailjs
            .sendForm("service_3y448zg", "template_pvny5rj", e.target, "2YrkTrCB_0P1eVoXk")
            .then(
                (result) => {
                    alert(`Thanks for contacting us, ${formData.name}!\nYour message: ${formData.message}`);
                    setFormData({ name: "", email: "", message: "" }); 
                },
                (error) => {
                    console.error(error.text);
                    alert("Something went wrong, please try again.");
                }
            );
    };
    

    return (
        <section id="contact" className="contact-section">
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    className="form-input"
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="form-input"
                />
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    className="form-textarea"
                />
                <button type="submit" className="form-button">Submit</button>
            </form>
            <img src="/dog-curling-2.png" alt="dog-curling"></img>
        </section>
        
    );
};

export default ContactForm;