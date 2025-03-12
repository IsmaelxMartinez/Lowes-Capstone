import React, { useEffect, useState } from "react";
import PlantCard from "../PlantCard/PlantCard.jsx";

const PlantList = () => {
  const [data, setData] = useState({ plants: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/listPlants")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching plant data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading plants...</div>;
  if (error) return <div>Error loading plants: {error}</div>;

  return (
    <div className="plant-list">
      <h1>Plant List</h1>
      {data.plants && data.plants.length > 0 ? (
        <div className="plants-container">
          {data.plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      ) : (
        <p>No plants found.</p>
      )}
    </div>
  );
};

export default PlantList;
