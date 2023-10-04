import { readJSON } from '../utils.js'
const questions = readJSON('./questions.json')

export class QuestionModel {
  static async getAll ({area}) {
    if (area) {
      return questions.filter(
        question => question.area.toLowerCase().includes(area.toLowerCase())
      )
    }
    return questions
  }

  static async getById ({id}) {
    const question = questions.find(question => question.id === Number(id))
    return question
  }
}
