import { QuestionModel } from '../models/question.js'

export class QuestionController {
  static async getAll (req, res) {
    const { area } = req.query
    const questions = await QuestionModel.getAll({ area })

    res.json(questions)
  }

  static async getById (req, res) {
    const { id } = req.params
    const question = await QuestionModel.getById({ id })

    if (question) return res.json(question)
    res.status(404).json({ message: 'Question not found' })
  }
}
