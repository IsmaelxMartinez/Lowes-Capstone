import React from "react";

const PlantCard = ({ plant }) => {
  return (
    <div className="plant-card">
      <h2>{plant.name}</h2>
      <p>
        <strong>Scientific Name:</strong> {plant.scientific_name}
      </p>

      {/* Display description if available */}
      {plant.description ? (
        <p>
          <strong>Description:</strong> {plant.description}
        </p>
      ) : (
        <p>
          <strong>Description:</strong> No description available.
        </p>
      )}

      {/* Display plant type */}
      <p>
        <strong>Type:</strong> {plant.type}
      </p>

      {/* Display images if available */}
      {plant.images && (
        <div className="plant-images">
          {plant.images.thumb && (
            <img
              src={plant.images.thumb}
              alt={`${plant.name} Thumbnail`}
              className="plant-thumbnail"
            />
          )}
          {plant.images.title && (
            <img
              src={plant.images.title}
              alt={`${plant.name} Title`}
              className="plant-title-image"
            />
          )}
        </div>
      )}

      {/* Display link to plant page if available */}
      {plant.link && (
        <p>
          <strong>More Info:</strong>
          <a href={plant.link} target="_blank" rel="noopener noreferrer">
            View Plant Details
          </a>
        </p>
      )}

      {/* Display creation and update dates */}
      <div className="plant-metadata">
        <p>
          <strong>Added:</strong>{" "}
          {new Date(plant.created_at).toLocaleDateString()}
        </p>
        <p>
          <strong>Last Updated:</strong>{" "}
          {new Date(plant.updated_at).toLocaleDateString()}
        </p>
      </div>

      {/* Display additional data if available */}
      {plant.data && plant.data.length > 0 && (
        <div className="plant-additional-data">
          <h3>Additional Information</h3>
          {plant.data.map((item, index) => (
            <p key={index}>
              <strong>{item.key}:</strong>{" "}
              {item.key === "Wikipedia" ||
              item.key === "Plants For A Future" ? (
                <a href={item.value} target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlantCard;
