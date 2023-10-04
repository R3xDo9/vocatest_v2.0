import { Router } from 'express'
import { QuestionController } from '../controllers/questions.js'

export const questionsRouter = Router()

questionsRouter.get('/', QuestionController.getAll)

questionsRouter.get('/:id', QuestionController.getById)

