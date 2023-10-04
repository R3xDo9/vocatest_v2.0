import z from 'zod'
// Esquema para validar los datos que entran en la api
const answerSchema = z.object({
  'Arte y Creatividad': z.number().int().min(0).max(10),
  'Ciencias Sociales': z.number().int().min(0).max(10),
  'Economía, Administración y Finanzas': z.number().int().min(0).max(10),
  'Ciencia y Tecnologia': z.number().int().min(0).max(10),
  'Ciencias de la Salud': z.number().int().min(0).max(10),
  'Ciencias Ecológicas y Ambientales': z.number().int().min(0).max(10)
})

export function validateAnswer (input) {
  return answerSchema.safeParse(input)
}

export function validatePartialAnswer (input) {
  return answerSchema.partial().safeParse(input)
}
