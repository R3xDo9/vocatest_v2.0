import { Router } from 'express'
import { ProgramasController } from '../controllers/programas.js'

export const programasRouter = Router()

programasRouter.get('/', ProgramasController.getAll)

programasRouter.get('/:id', ProgramasController.getById)
