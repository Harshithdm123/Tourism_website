import React from "react";
import "../styles/mahabaleshwar.css";

// Import images
import templeImage from "../images/image4.png";
import galleryImage1 from "../images/image1.png";
import galleryImage2 from "../images/image2.png";
import galleryImage3 from "../images/image3.png";
import galleryImage4 from "../images/image4.png";

function DharmasthalaDetails() {
  return (
    <div className="dharmasthala-details">
      <h1>Mahabaleshwar Temple</h1>
      <img src={templeImage} alt="Dharmasthala Temple" className="main-image" />
      <p>
      Srikshetra Gokarna is one of the places in India. The Father of the universe Parashiva is in the form of Athmalinga.
      </p>
      <p>
      The Mahabaleshwar Temple in Gokarna, Karnataka, is a sacred destination renowned for its religious significance and architectural splendor. Dedicated to Lord Shiva, the temple houses the revered Atma-Linga, attracting pilgrims from across the globe. Its Dravidian-style architecture features intricately carved granite sculptures and sanctified courtyards, evoking a deep sense of spirituality. Surrounded by lush greenery and nestled near pristine beaches, the temple offers a blend of divinity and natural beauty. Mythologically, the temple holds a special place in the Ramayana, making it a must-visit for those seeking a spiritual connection and historical intrigue.
      </p>
      
      <h2>Gallery</h2>
      <div className="gallery">
        <img src={galleryImage1} alt="Temple Gallery 1" className="gallery-image" />
        <img src={galleryImage2} alt="Temple Gallery 2" className="gallery-image" />
        <img src={galleryImage3} alt="Temple Gallery 3" className="gallery-image" />
        <img src={galleryImage4} alt="Temple Gallery 4" className="gallery-image" />
      </div>
    </div>
  );
}

export default DharmasthalaDetails;
