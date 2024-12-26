import React from "react";
import "../styles/Murudeshwara.css";

// Import images
import templeImage from "../images/image2.png";
import galleryImage1 from "../images/image1.png";
import galleryImage2 from "../images/image2.png";
import galleryImage3 from "../images/image3.png";
import galleryImage4 from "../images/image4.png";

function DharmasthalaDetails() {
  return (
    <div className="dharmasthala-details">
      <h1>Mangrove Forest </h1>
      <img src={templeImage} alt="Dharmasthala Temple" className="main-image" />
      <p>
      The Sharavathi Mangrove Boardwalk, known as Kandla Vana, is a well-paved wooden walkway in the mangrove forest.
      </p>
      <p>
      The Murudeshwara Temple, located along the pristine shores of the Arabian Sea in Karnataka, is a magnificent tribute to Lord Shiva. Home to the world's second-tallest Shiva statue, this iconic temple is an architectural masterpiece that seamlessly blends religious devotion with artistic grandeur. Towering over the temple complex is a 20-story Gopura (gateway), which offers panoramic views of the ocean and surrounding hills. The temple is steeped in mythology, tracing its origins to the legend of the Atma-Linga. Visitors can marvel at the intricate carvings, participate in spiritual rituals, or simply soak in the serenity of the tranquil surroundings. The temple's coastal setting makes it an unforgettable experience for both pilgrims and tourists. </p>
      <h2>Gallery</h2>
      <div className="gallery">
        <img src={galleryImage1} alt="Gallery Image 1" className="gallery-image" />
        <img src={galleryImage2} alt="Gallery Image 2" className="gallery-image" />
        <img src={galleryImage3} alt="Gallery Image 3" className="gallery-image" />
        <img src={galleryImage4} alt="Gallery Image 4" className="gallery-image" />
      </div>
    </div>
  );
}

export default DharmasthalaDetails;
