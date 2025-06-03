import React from "react";

const NearbyPlacesList = ({ lugares }) => {
  return (
    <div>
      <h3>Lugares Cercanos (1 km)</h3>
      {Object.entries(lugares).map(([grupo, items]) => (
        <div key={grupo}>
          <h4>{grupo}</h4>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NearbyPlacesList;
