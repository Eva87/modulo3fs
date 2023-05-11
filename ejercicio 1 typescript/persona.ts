import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";
export class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanos: string;
  colorFavorito: string;
  sexo: string;
  direcciones: Direccion[];
  mails: Mail[];
  telefonos: Telefono[];
  notas: string;

  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: string, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanos = cumpleanos;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.mails = mails;
    this.telefonos = telefonos;
    this.notas = notas;
  }

  getDireccionPrincipal(): Direccion {
    return this.direcciones[0];
  }

  getMailPrincipal(): Mail {
    return this.mails[0];
  }

  getTelefonoPrincipal(): Telefono {
    return this.telefonos[0];
  }

  addDireccion(direccion: Direccion) {
    this.direcciones.push(direccion);
  }

  addMail(mail: Mail) {
    this.mails.push(mail);
  }

  addTelefono(telefono: Telefono) {
    this.telefonos.push(telefono);
  }

  static buscarPorDNI(personas: Persona[], dni: string): Persona | null {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].dni === dni) {
        return personas[i];
      }
    }
    return null;
  }
}
