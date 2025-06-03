import csv
from redis_client import r

if not r.exists("datos_cargados"):
    try:
        with open("data.csv", newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                tipo = row["tipo"]
                long = float(row["longitud"])
                lat = float(row["latitud"])
                nombre = row["nombre"]

                # Guardamos cada grupo en un SET en Redis llamado "grupos"
                r.sadd("grupos", tipo)

                # Guardamos cada lugar en su grupo correspondiente
                r.geoadd(tipo, (long, lat, nombre))
        
        # Marca que los datos fueron cargados
        r.set("datos_cargados", "1")
        print("Datos insertados correctamente.")

    except Exception as e:
        print(f"Error al cargar datos: {e}")
else:
    print("Los datos ya han sido cargados anteriormente.")
