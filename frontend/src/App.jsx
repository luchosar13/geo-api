import React, { useState } from "react";
import CoordinatesForm from "./components/CoordinatesForm";
import NearbyPlacesList from "./components/NearbyPlacesList";
import DistanceCalculator from "./components/DistanceCalculator";
import AddPlaceForm from "./components/AddPlaceForm";
import api from "./api";

const App = () => {
  const [lugares, setLugares] = useState({});

  const fetchLugares = async ({ lat, long }) => {
    const res = await api.get("/lugares_cercanos/", {
      params: {
        lat,
        long,
        radio: 1,
        unidad: "km",
      },
    });
    setLugares(res.data);
  };

  return (
    <div>
      <h1>Turismo - Puntos de Interés</h1>
      <CoordinatesForm onSubmit={fetchLugares} />
      <NearbyPlacesList lugares={lugares} />
      <DistanceCalculator />
      <AddPlaceForm />
    </div>
  );
};

export default App;
