import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Terms and Conditions</h2>
      <p>
        Please read the following terms and conditions carefully before using our services. By signing the waiver, you agree to comply with these terms.
      </p>
      <p><strong>Legal Disclaimer:</strong></p>
      <p>
        The information provided by Big Dawgz Gym is for general informational purposes only. By using our services, you agree that Big Dawgz Gym is not responsible for any injuries or damages.
      </p>
      <p>
        Big Dawgz Gym reserves the right to change, modify, or update these terms at any time.
      </p>
      <Link to="/waiver" style={{ textDecoration: "underline", color: "blue" }}>
        Go back to Waiver Form
      </Link>
    </div>
    
  );
};

export default Terms;