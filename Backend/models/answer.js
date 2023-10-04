import AnswerSchema from './answerSchema.js'
import mongoose from 'mongoose'

// Crea un modelo de Mongoose utilizando el esquema AnswerSchema
const AnswerModelSchema = mongoose.model('Answer', AnswerSchema)

export class AnswerModel {
  static async getAll () {
    try {
      const answers = AnswerModelSchema.find()
      return answers
    } catch (error) {
      console.error('Error fetching answers:', error)
      throw error
    }
  }

  static async getById ({id}) {
    try {
      const answer = AnswerModelSchema.findById(id)
      return answer
    } catch (error) {
      console.error('Error fetching answer by ID:', error)
      throw error
    }
  }

  static async create (input) {
    const newAnswer = {
      date: new Date(),
      ...input // pasa los datos ya validados
    }

    // Crea una instancia de AnswerModel y guárdala en la base de datos
    const answerInstance = new AnswerModelSchema(newAnswer)

    try {
      const savedAnswer = await answerInstance.save()
      return savedAnswer
    } catch (error) {
      console.error('Error saving answer:', error)
      throw error // Propaga el error para que se maneje en el controlador
    }
  }

  static async delete (id) {
    try {
      const deletedAnswer = AnswerModelSchema.findByIdAndDelete(id)
      return deletedAnswer
    } catch (error) {
      console.error('Error deleting answer by ID:', error)
      throw error
    }
  }

  static async update (id, updateData) {
    try {
      const updatedAnswer = AnswerModelSchema.findByIdAndUpdate(id, updateData, { new: true })
      return updatedAnswer
    } catch (error) {
      console.error('Error updating answer by ID:', error)
      throw error
    }
  }
}
