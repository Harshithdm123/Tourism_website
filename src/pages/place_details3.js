import React from "react";
import "../styles/mahabaleshwar.css";

// Import images
import templeImage from "../images/image5.png";
import galleryImage1 from "../images/image1.png";
import galleryImage2 from "../images/image2.png";
import galleryImage3 from "../images/image3.png";
import galleryImage4 from "../images/image4.png";

function DharmasthalaDetails() {
  return (
    <div className="dharmasthala-details">
      <h1>Yana Caves</h1>
      <img src={templeImage} alt="Dharmasthala Temple" className="main-image" />
      
      <p>

      The Yana Caves, located amidst the dense forests of the Western Ghats in Karnataka, are a natural wonder that captivates adventure seekers and nature enthusiasts alike. These towering black limestone rock formations, known as Bhairaveshwara Shikhara and Mohini Shikhara, rise dramatically against the lush green backdrop. Apart from their striking appearance, the caves are steeped in mythology, believed to be the site where Lord Vishnu vanquished the demon Bhasmasura. The trek to the caves through verdant forests is an adventure in itself, offering glimpses of rare flora and fauna. Visitors can explore the caves, marvel at the unique rock formations, and immerse themselves in the tranquil beauty of nature.
      
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
