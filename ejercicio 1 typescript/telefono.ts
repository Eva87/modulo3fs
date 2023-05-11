// telefono.ts
export class Telefono {
  numero: string;
  tipo: string;

  constructor(numero: string, tipo: string) {
    this.numero = numero;
    this.tipo = tipo;
  }

  // Función para obtener el teléfono completo
  getTelefonoCompleto():string {
    return `${this.numero} (${this.tipo})`;
  }
}