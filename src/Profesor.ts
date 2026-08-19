export class Profesor {
    constructor(
        public nombre: string,
        public legajo: number,
    ) {}

    obtenerNombreCompleto(): string {
        return this.nombre;
    }

    obtenerLegajo(): number {
        return this.legajo;
    }
}
