import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

// crear personas
const direccion1 = new Direccion("Calle Mayor", 1, 2, "A", "28001", "Madrid", "Madrid");
const mail1 = new Mail("Personal", "juan@example.com");
const telefono1 = new Telefono("Móvil", "123456789");
const persona1 = new Persona(
  "Juan",
  "Pérez",
  30,
  "12345678A",
  "01/01/1990",
  "Azul",
  "Hombre",
  [direccion1],
  [mail1],
  [telefono1],
  "Notas sobre Juan"
);

const direccion2 = new Direccion("Calle Mayor", 3, 4, "B", "28002", "Madrid", "Madrid");
const mail2 = new Mail("Trabajo", "juan.perez@empresa.com");
const telefono2 = new Telefono("Fijo", "987654321");
const persona2 = new Persona(
  "María",
  "García",
  25,
  "23456789B",
  "01/01/1995",
  "Rojo",
  "Mujer",
  [direccion2],
  [mail2],
  [telefono2],
  "Notas sobre María"
);

const direccion3 = new Direccion("Calle Mayor", 5, 6, "C", "28003", "Madrid", "Madrid");
const mail3 = new Mail("Personal", "javier@example.com");
const telefono3 = new Telefono("Móvil", "111222333");
const persona3 = new Persona(
  "Javier",
  "Fernández",
  40,
  "34567890C",
  "01/01/1980",
  "Verde",
  "Hombre",
  [direccion3],
  [mail3],
  [telefono3],
  "Notas sobre Javier"
);

// mostrar personas
console.log("Registros iniciales:");
console.log(persona1);
console.log(persona2);
console.log(persona3);

// modificar persona por DNI
const personaModificar = Persona.buscarPorDNI([persona1, persona2, persona3], "12345678A");
if (personaModificar) {
  const nuevaDireccion = new Direccion("Calle Nueva", 7, 8, "D", "28004", "Madrid", "Madrid");
  const nuevoMail = new Mail("Personal", "juan.perez@nuevo.com");
  const nuevoTelefono = new Telefono("Móvil", "555666777");
  personaModificar.addDireccion(nuevaDireccion);
  personaModificar.addMail(nuevoMail);
  personaModificar.addTelefono(nuevoTelefono);
}

// mostrar personas actualizadas
console.log("Registros actualizados:");
console.log(persona1);
console.log(persona2);
console.log(persona3);
