import { describe, expect, it } from 'vitest'
import { Profesor } from '../src/Profesor'

describe('Profesor', () => {
	it('se crea correctamente con sus datos', () => {
		const profesor = new Profesor('Ana', 1)

		expect(profesor).toBeInstanceOf(Profesor)
	})
})
