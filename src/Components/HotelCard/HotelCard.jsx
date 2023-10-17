// HotelCard.js
import React from 'react';
import './HotelCard.css';

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-image">
        <img src={hotel.image} alt={hotel.name} />
      </div>
      <div className="hotel-details">
        <h2>{hotel.name}</h2>
        <p className="location">{hotel.location}</p>
        <p className="price">Price: {hotel.price}</p>
        <div className="rating">
          <p>Rating:</p>
          <div className="stars">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={index < hotel.rating ? 'star checked' : 'star'}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
        <p className="description">{hotel.description}</p>
        <button className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default HotelCard;
