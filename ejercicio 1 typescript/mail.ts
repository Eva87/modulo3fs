// mail.ts
export class Mail {
  direccion: string;
  tipo: string;

  constructor(direccion: string, tipo: string) {
    this.direccion = direccion;
    this.tipo = tipo;
  }

  // Función para obtener el mail completo
  getMailCompleto(): string {
    return `${this.direccion} (${this.tipo})`;
  }
}
