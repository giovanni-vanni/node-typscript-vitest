import { describe, expect, it } from "vitest";
import { Materia } from "../src/Materia";

describe("Materia", () => {
	it("debe poder crearse correctamente", () => {
		const materia = new Materia(
			"Paradigmas de Programación",
			0,
			"",
		);

		expect(materia).toBeInstanceOf(Materia);
		expect(materia).toHaveProperty("nombre", "Paradigmas de Programación");
	});
});
