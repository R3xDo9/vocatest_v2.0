import { readJSON } from '../utils.js'
const programas = readJSON('./ProgramasUFiltrados.json')

export class ProgramaModel {
  static async getAll ({area}) {
    if (area) {
      return programas.filter(
        programa => programa['ÁREA_DE_CONOCIMIENTO'].toLowerCase().includes(area.toLowerCase())
      )
    }
    return programas
  }

  static async getById ({id}) {
    const programa = programas.find(programa => programa['CÓDIGO_SNIES_DEL_PROGRAMA'] === Number(id))
    return programa
  }
}
