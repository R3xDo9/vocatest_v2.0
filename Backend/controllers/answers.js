import { AnswerModel } from '../models/answer.js'
import { validateAnswer, validatePartialAnswer } from '../schemas/answers.js'

export class AnswerController {
  static async getAll (req, res) {
    try {
      const answers = await AnswerModel.getAll()
      res.json(answers)
    } catch (error) {
      console.error('Error fetching answers:', error)
      res.status(500).json({ message: 'Error fetching answers' })
    }
  }

  static async getById (req, res) {
    const { id } = req.params
    try {
      const answer = await AnswerModel.getById({id})
      if (!answer) {
        return res.status(404).json({ message: 'Answer not found' })
      }
      res.json(answer)
    } catch (error) {
      console.error('Error fetching answer by ID:', error)
      res.status(500).json({ message: 'Error fetching answer by ID' })
    }
  }

  static async create (req, res) {
    const result = validateAnswer(req.body)
    if (!result.success) {
      return res.status(400).json({ error: result.error })
    }
    const newAnswer = await AnswerModel.create(result.data)
    try {
      const savedAnswer = await newAnswer.save()
      res.status(201).json(savedAnswer)
    } catch (error) {
      console.error('Error saving answer:', error)
      res.status(500).json({ message: 'Error saving answer' })
    }
  }

  static async delete (req, res) {
    const { id } = req.params
    try {
      const deletedAnswer = await AnswerModel.delete(id)
      if (!deletedAnswer) {
        return res.status(404).json({ message: 'Answer not found' })
      }
      res.json({ message: 'Answer deleted' })
    } catch (error) {
      console.error('Error deleting answer by ID:', error)
      res.status(500).json({ message: 'Error deleting answer by ID' })
    }
  }

  static async update (req, res) {
    const { id } = req.params
    // Utiliza validatePartialAnswer para validar los datos de entrada
    const result = validatePartialAnswer(req.body)
    if (!result.success) {
      return res.status(400).json({ error: result.error })
    }

    try {
      const updatedAnswer = await AnswerModel.update(id, result.data)
      if (!updatedAnswer) {
        return res.status(404).json({ message: 'Answer not found' })
      }
      res.json(updatedAnswer)
    } catch (error) {
      console.error('Error updating answer by ID:', error)
      res.status(500).json({ message: 'Error updating answer by ID' })
    }
  }
}
