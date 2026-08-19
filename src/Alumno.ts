import { Persona } from "./Persona";
export class Alumno extends Persona {
  constructor(
    public nombre: string,
    public edad: number,
    public legajo: number
  ) {
      super(nombre, edad, legajo);
  }

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  obtenerEstado(): string {
    return this.esMayorDeEdad() ? "Mayor de edad" : "Menor de edad";
  }

}
