from redis_client import r
from open_csv import *
from fastapi import FastAPI
from clases import *
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/lugares_cercanos/')
def calcular_lugares_cercanos(long, lat, radio, unidad: Unidad):

    resultados_radio = {}
    grupos = []

    # Hacemos una lista con los grupos
    for g in r.smembers("grupos"):
        grupos.append(g)

    # Logica para conocer los lugares cercanos a la ubicacion del usuario
    for grupo in grupos:
        lugares = r.geosearch(
                grupo,
                longitude=long,
                latitude=lat,
                radius=radio,
                unit=unidad
            )
        resultados_radio[grupo] = lugares

    return resultados_radio


@app.get("/distancia/")
def calcular_distancia(long_user, lat_user, grupo, lugar):
    r.geoadd(grupo, (long_user, lat_user, 'ubi_user'))
    distancia = r.geodist(grupo, 'ubi_user', lugar, unit='m')
    r.zrem(grupo, 'ubi_user')
    if distancia:
        return {"distancia_m": distancia}
    

@app.post("/agregar_lugar/")
def agregar_lugar(lugar: Lugar):
    r.sadd("grupos", lugar.grupo)
    r.geoadd(lugar.grupo, (lugar.long, lugar.lat, lugar.nombre))
    return {"mensaje": "Lugar agregado correctamente"}


