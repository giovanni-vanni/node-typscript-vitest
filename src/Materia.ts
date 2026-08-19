import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";

export class Materia {
    constructor(
        public nombre: string,
        public anio: number,
        public carrera: string
    ) {}

    titular(): Profesor {
        return new Profesor("Juan Perez", 45);
    };
    adjunto(): Profesor {
        return new Profesor("Maria Gomez", 30);
    }
    alumnos(): Alumno[] {
        return [
            new Alumno("Juan", 18, 12345),
            new Alumno("Ana", 25, 12345),
            new Alumno("Pedro", 17, 12345)
        ];
    }
}
