import React from 'react'; // Import useState for managing state
import TourCard from './TourCard'; // Import the TourCard component

const Gallery = ({ tours, onRemoveTour }) => { // Add onRemoveTour prop to notify parent
  return (
    <div className="gallery"> {/* Container for the gallery */}
      {tours.map((tour) => ( // Map over the tours array to render each tour
        <TourCard key={tour.id} tour={tour} onRemove={onRemoveTour} /> // Pass the onRemoveTour callback to TourCard
      ))}
    </div>
  );
};

export default Gallery; // Export the Gallery component for use in other parts of the app