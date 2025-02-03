import React from "react";
import "./Services.css"; 

const Services = () => {
    const services = [
        {
            title: "Weightlifting",
            description: "Build muscle, gain strength, and improve endurance with our top-tier weightlifting programs."
        },
        {
            title: "Cardio Training",
            description: "Boost your cardiovascular health with intense, heart-pumping cardio sessions."
        },
        {
            title: "Personal Coaching",
            description: "Work with a certified personal trainer to achieve your specific fitness goals."
        }
    ];

    return (
        <section id="services" className="services-container">
            <h3 className="services-header">Our Services</h3>
            <div className="services-list">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h4 className="service-title">{service.title}</h4>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
            <img src="/dog-curling.png" alt="Dog Curling" className="services-image" />
        </section>
        
    );
};

export default Services;