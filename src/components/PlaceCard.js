import React from "react";
import { useNavigate } from "react-router-dom";
import "./PlaceCard.css";

function PlaceCard({ place }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (place.link) {
      navigate(place.link); // Navigate to the linked page
    }
  };

  return (
    <div className="place-card" onClick={handleCardClick}>
      <img src={place.image} alt={place.name} className="place-image" />
      <div className="place-info">
        <h2>{place.name}</h2>
        <p>{place.description}</p>
      </div>
    </div>
  );
}

export default PlaceCard;
