import { Persona } from "./persona";

export class Profesor extends Persona {
    constructor(
        public nombre: string,
        public legajo: number,
    ) {
        super(nombre, 0, legajo);
    }

    obtenerNombreCompleto(): string {
        return this.nombre;
    }

    obtenerLegajo(): number {
        return this.legajo;
    }
}
