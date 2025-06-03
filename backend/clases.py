from enum import Enum
from pydantic import BaseModel

class Unidad(str, Enum):
    km = 'km'
    m = 'm'

class Lugar(BaseModel):
    nombre: str
    grupo: str
    lat: float
    long: float

