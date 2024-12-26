import React from "react";
import newYorkImage from "../images/WhatsApp Image 2024-12-11 at 06.11.27_954aebd9.jpg";
import "./NewYorkDetails.css";

function NewYorkDetails() {
  return (
    <div className="place-details5">
      <h1>New York City</h1>
      <img src={newYorkImage} alt="New York" className="details-image" />
      <p>
        New York City 
        

      </p>
    </div>
  );
}

export default NewYorkDetails;
