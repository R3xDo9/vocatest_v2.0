import express, {json} from 'express'
import { questionsRouter } from './routes/questions.js'
import { answersRouter } from './routes/answers.js'
import { corsMiddleware } from './middlewares/cors.js'
import './database.js'

const app = express()
app.use(json())
app.disable('x-powered-by')
app.use(corsMiddleware())
app.get('/', (req, res) => {
  res.send('<h1>Hola mundo!!</h1>')
})

app.use('/questions', questionsRouter)
app.use('/respuestas', answersRouter)

// Inicializar el servidor
const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
