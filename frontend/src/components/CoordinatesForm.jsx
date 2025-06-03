import React, { useState } from "react";

const CoordinatesForm = ({ onSubmit }) => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ lat, long });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Latitud"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        required
        step="any"
      />
      <input
        type="number"
        placeholder="Longitud"
        value={long}
        onChange={(e) => setLong(e.target.value)}
        required
        step="any"
      />
      <button type="submit">Buscar Lugares Cercanos</button>
    </form>
  );
};

export default CoordinatesForm;
