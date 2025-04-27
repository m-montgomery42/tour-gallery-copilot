import React from 'react'; // Import React to resolve the ReferenceError
import { useState, useEffect } from 'react';
import viteLogo from './assets/react.svg'; // Import viteLogo asset
import reactLogo from './assets/react.svg'; // Import reactLogo asset
import Gallery from './components/Gallery'; // Import the Gallery component

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('/api/react-tours-project'); // Updated to use the proxy path
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleRemoveTour = (id) => { // Callback to remove a tour and update state
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const handleRefresh = () => {
    setLoading(true); // Set loading to true when refresh is clicked
    setTours([]); // Clear the tours state
    setTimeout(() => { // Simulate a delay for fetching tours
      window.location.reload(); // Reload the page after the delay
    }, 1000); // Adjust the delay as needed
  };

  return (
    <>
      <h1 className="app-title">Tour Gallery</h1> {/* Add a title for the app */}
      {loading && <p>Loading...</p>} {/* Display loading message if data is still being fetched */}
      {error && <p>Error: {error}</p>} {/* Display error message if there is an error */}
      {!loading && !error && <Gallery tours={tours} onRemoveTour={handleRemoveTour} />} {/* Render Gallery component with tour data if no loading or error */}
      {tours.length === 0 && !loading && !error && ( // Ensure the message and refresh button are displayed when no tours are left
        <div className="refresh-container"> {/* Add a container for better styling */}
          <p>No tours left</p> {/* Display message when no tours are left */}
          <button onClick={handleRefresh} className="refresh-button">Refresh</button> {/* Refresh button */}
        </div>
      )}
    </>
  );
}

export default App;
