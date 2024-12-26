import React from "react";
import "../styles/DharmasthalaDetails.css";

// Import images
import templeImage from "../images/image3.png";
import galleryImage1 from "../images/image1.png";
import galleryImage2 from "../images/image2.png";
import galleryImage3 from "../images/image3.png";
import galleryImage4 from "../images/image4.png";

function DharmasthalaDetails() {
  return (
    <div className="dharmasthala-details">
      <h1>Dharmasthala Temple</h1>
      <img src={templeImage} alt="Dharmasthala Temple" className="main-image" />
      <p>
        Dharmasthala Temple is a renowned Hindu religious shrine located in the town of Dharmasthala, Karnataka, India. It is dedicated to Lord Manjunatha, a form of Lord Shiva, and attracts millions of devotees each year. The temple is also known for its inclusive practices and philanthropic activities.
      </p>
      <p>
      Dharmasthala is a unique destination that exemplifies the harmonious coexistence of diverse cultures and religions. Located in the Dakshina Kannada district of Karnataka, this temple town is renowned for the Sri Manjunatha Swamy Temple, dedicated to Lord Shiva. What sets Dharmasthala apart is its ethos of charity and community service, upheld by the Jain Heggade family, who manage the temple while maintaining its Hindu traditions. Pilgrims and visitors are treated to a spiritually uplifting experience, enhanced by the temple’s free food offerings and peaceful ambiance. Dharmasthala also features attractions like the Bahubali statue, symbolizing Jain values of peace and renunciation. It is a must-visit for anyone seeking spiritual enlightenment and cultural insights.
         </p>
      
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
