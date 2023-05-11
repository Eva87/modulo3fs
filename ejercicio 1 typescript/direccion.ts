// direccion.ts
export class Direccion {
  calle: string;
  numero: number;
  piso: number;
  letra: string;
  codigoPostal: string;
  poblacion: string;
  provincia: string;

  constructor(
    calle: string,
    numero: number,
    piso: number,
    letra: string,
    codigoPostal: string,
    poblacion: string,
    provincia: string
  ) {
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.letra = letra;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
  }

  // Función para obtener la dirección completa
  getDireccionCompleta(): string {
    return `${this.calle} ${this.numero} ${this.piso}${this.letra}, ${this.codigoPostal} ${this.poblacion}, ${this.provincia}`;
  }
}
