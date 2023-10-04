import { Schema } from 'mongoose'

const AnswerSchema = new Schema({
  'Arte y Creatividad': {
    type: Number,
    required: true
  },
  'Ciencias Sociales': {
    type: Number,
    required: true
  },
  'Economía, Administración y Finanzas': {
    type: Number,
    required: true
  },
  'Ciencia y Tecnologia': {
    type: Number,
    required: true
  },
  'Ciencias de la Salud': {
    type: Number,
    required: true
  },
  'Ciencias Ecológicas y Ambientales': {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

export default AnswerSchema
