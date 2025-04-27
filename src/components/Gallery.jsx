import React from 'react'; // Import React library for creating components
import TourCard from './TourCard'; // Import the TourCard component

const Gallery = ({ tours }) => { // Define the Gallery component that takes a 'tours' prop
  return (
    <div className="gallery"> {/* Container for the gallery */}
      {tours.map((tour, index) => ( // Map over the tours array to render each tour
        <TourCard key={index} {...tour} /> // Render a TourCard for each tour, passing tour data as props
      ))}
    </div>
  );
};

export default Gallery; // Export the Gallery component for use in other parts of the app