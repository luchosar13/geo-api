import React, { useState } from "react";
import api from "../api";

const AddPlaceForm = () => {
  const [grupo, setGrupo] = useState("");
  const [nombre, setNombre] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/agregar_lugar/", {
      grupo,
      nombre,
      lat: parseFloat(lat),
      long: parseFloat(long),
    });
    alert("Lugar agregado correctamente");
  };

  return (
    <div>
      <h3>Agregar un nuevo lugar</h3>
      <form onSubmit={handleSubmit}>
        <input value={grupo} onChange={(e) => setGrupo(e.target.value)} placeholder="Grupo" required />
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
        <input type="number" value={lat} onChange={(e) => setLat(e.target.value)} placeholder="Latitud" required />
        <input type="number" value={long} onChange={(e) => setLong(e.target.value)} placeholder="Longitud" required />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddPlaceForm;
