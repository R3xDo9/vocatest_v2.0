import { connect } from 'mongoose'
const password = 'NjqCsGaHOAEoVJoN';
(async () => {
  try {
    const db = await connect(`mongodb+srv://r3xdo:${password}@cluster0.kmmpwik.mongodb.net/?retryWrites=true&w=majority`)
    console.log('DB connected to', db.connection.name)

    // Luego puedes iniciar tu servidor Express o realizar otras operaciones aquí
  } catch (error) {
    console.error('Error connecting to the database: \n', error)
  }
})()

