import React from "react";
import "../styles/mahabaleshwar.css";

// Import images
import templeImage from "../images/image6.png";
import galleryImage1 from "../images/image1.png";
import galleryImage2 from "../images/image2.png";
import galleryImage3 from "../images/image3.png";
import galleryImage4 from "../images/image4.png";

function DharmasthalaDetails() {
  return (
    <div className="dharmasthala-details">
      <h1>Honnavar Boating</h1>
      <img src={templeImage} alt="Dharmasthala Temple" className="main-image" />
      {/* <p>
      Srikshetra Gokarna is one of the places in India. The Father of the universe Parashiva is in the form of Athmalinga.
      </p> */}
      <p>

      The picturesque town of Honnavar in Karnataka is a paradise for boating enthusiasts. Nestled at the confluence of the Sharavati River and the Arabian Sea, Honnavar offers breathtaking backwater cruises that provide a front-row seat to the region’s natural beauty. Glide through serene waters surrounded by lush greenery, mangroves, and small islands. The experience is elevated by the sight of migratory birds and the cool, gentle breeze. Whether you opt for a traditional boat ride or a modern cruise, Honnavar’s boating adventures are perfect for families, couples, and solo travelers looking for a peaceful yet exhilarating journey through one of Karnataka’s hidden gems. These descriptions can enrich your tourism website by providing engaging and detailed insights into each destination, enticing visitors to explore and experience the beauty of Karnataka!

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
