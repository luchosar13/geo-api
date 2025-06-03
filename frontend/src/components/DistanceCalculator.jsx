import React, { useState } from "react";
import api from "../api";

const DistanceCalculator = () => {
  const [grupo, setGrupo] = useState("");
  const [nombre, setNombre] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [distancia, setDistancia] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.get("/distancia/", {
      params: {
          grupo,
          lugar: nombre,   
          lat_user: lat,     
          long_user: long
      },
    });
    setDistancia(res.data.distancia_m);
  };

  return (
    <div>
      <h3>Calcular distancia a un lugar</h3>
      <form onSubmit={handleSubmit}>
        <input value={grupo} onChange={(e) => setGrupo(e.target.value)} placeholder="Grupo" required />
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del lugar" required />
        <input type="number" value={lat} onChange={(e) => setLat(e.target.value)} placeholder="Latitud" required />
        <input type="number" value={long} onChange={(e) => setLong(e.target.value)} placeholder="Longitud" required />
        <button type="submit">Calcular</button>
      </form>
      {distancia && <p>Distancia: {distancia} Metros</p>}
    </div>
  );
};

export default DistanceCalculator;
