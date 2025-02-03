import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Waiver.css";

const Waiver = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    phone: "",
    agreement: false,
  });

  // No special characters in names and uppercase letter first
  const handleFirstNameChange = (e) => {
    let value = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(value)) {
      value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      setFormData({ ...formData, firstname: value });
    }
  };

  const handleLastNameChange = (e) => {
    let value = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(value)) {
      value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      setFormData({ ...formData, lastname: value });
    }
  };

  // Automatically add "-" in phone # field
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 3 && input.length <= 6) {
      input = input.slice(0, 3) + "-" + input.slice(3);
    } else if (input.length > 6) {
      input = input.slice(0, 3) + "-" + input.slice(3, 6) + "-" + input.slice(6);
    }
    setFormData({ ...formData, phone: input });
  };

  const handleAgeChange = (e) => {
    setFormData({ ...formData, age: e.target.value });
  };

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleAgreementChange = (e) => {
    setFormData({ ...formData, agreement: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, age, email, phone, agreement } = formData;

    if (!firstname || !lastname || !age || !email || !phone || !agreement) {
      alert("Please fill out all fields and accept the terms!");
    } else if (age < 18) {
      alert("You must be at least 18 years old to sign the waiver.");
    } else {
      alert(`Welcome to the Dawg Pack, ${formData.firstname}!`);
      setFormData({ firstname: "", lastname: "", age: "", email: "", phone: "", agreement: "" }); 
    }
  };

  return (
    <div className="waiver-container">
      <h2 className="waiver-header">Big Dawgz Waiver</h2>
      <form className="waiver-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            className="form-input"
            placeholder="Enter your first name"
            value={formData.firstname}
            onChange={handleFirstNameChange}
            minLength={2}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            className="form-input"
            placeholder="Enter your last name"
            value={formData.lastname}
            onChange={handleLastNameChange}
            minLength={2}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            className="form-input"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleAgeChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            className="form-input"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handlePhoneChange}
            maxLength="12"
            minLength="12"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="agreement">
            Do you agree to the{" "}
            <Link to="/terms" style={{ textDecoration: "underline", color: "blue" }}>
              terms of service
            </Link>
            ?
          </label>
          <input
            type="checkbox"
            id="agreement"
            className="checkbox"
            checked={formData.agreement}
            onChange={handleAgreementChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Waiver
        </button>
      </form>
    </div>
  );
};

export default Waiver;