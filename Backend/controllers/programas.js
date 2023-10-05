import { ProgramaModel } from '../models/programa.js'

export class ProgramasController {
  static async getAll (req, res) {
    const { area } = req.query
    const programas = await ProgramaModel.getAll({ area })

    res.json(programas)
  }

  static async getById (req, res) {
    const { id } = req.params
    const programa = await ProgramaModel.getById({ id })

    if (programa) return res.json(programa)
    res.status(404).json({ message: 'Programa not found' })
  }
}
