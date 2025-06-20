# 🌎 API Geográfica

Este proyecto es una aplicación **Full Stack** desarrollada con **FastAPI**, **Redis**, **Docker**, **React** y **Node.js**. 
Se trata de un sistema informativo sobre ubicaciones geograficas de lugares de interés en la ciudad de Concepción del Uruguay - Entre Ríos. 
En la cual podemos encontrar consultas que nos proporcionen:
1. Listado de todos los puntos de interés en el radio de 1 KM en relación a la ubicación del usuario.
2. Agregado de un punto de interés a la base de datos.
3. Distancia en metros de la ubicación del usuario a un punto particular proporcionado.

## 🧪 Requisitos para correr el proyecto

### Arquitectura

El único requisito para este proyecto es tener Docker Engine y Docker Compose en tu máquina local.

### Código

- Para levantar el proyecto:
  
  `sudo docker compose up --build`

### Visualización

- `localhost:8000/docs`
   
   En esta ubicación vamos a encontrar la documentación de la API proporcionada por FastAPI.
   
- `localhost:3000`
   
   En esta otra ubicación vamos a tener la interfaz con la que el usuario puede interacturar con nuestra API y base de datos.
