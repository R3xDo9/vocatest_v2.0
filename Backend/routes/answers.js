import { Router } from 'express'
import { AnswerController } from '../controllers/answers.js'

export const answersRouter = Router()

answersRouter.get('/', AnswerController.getAll)

answersRouter.get('/:id', AnswerController.getById)

answersRouter.post('/', AnswerController.create)

answersRouter.patch('/:id', AnswerController.update)

answersRouter.delete('/:id', AnswerController.delete)

