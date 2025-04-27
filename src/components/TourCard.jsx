import React, { useState } from 'react'; // Import React and useState for managing state

const TourCard = ({ tour, onRemove }) => { // Define the TourCard component with props for tour data and a removal callback
  const { name, info, image, price } = tour; // Destructure the tour object to extract its properties

  return (
    <div className="tour-card"> {/* Container for the tour card */}
      <img src={image} alt={name} className="tour-image" /> {/* Display the tour image with alt text */}
      <div className="tour-details"> {/* Container for the tour details */}
        <h2 className="tour-name">{name}</h2> {/* Display the tour name */}
        <p className="tour-info">{info}</p> {/* Display the tour information */}
        <p className="tour-price">${price}</p> {/* Display the tour price */}
        <button className="not-interested-button" onClick={() => onRemove(tour.id)}> {/* Button to remove the tour */}
          Not Interested {/* Button label */}
        </button>
      </div>
    </div>
  );
};

export default TourCard; // Export the TourCard component for use in other parts of the app