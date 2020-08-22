import express from 'express'
const cors = require( 'cors')
import diagnosesRouter from './routes/diagnoses'
const app = express()
app.use(cors())

const port = 3001 || process.env.PORT

// app.get('/api/diagnoses', (_req, res) => {
//   res.send('hello')
// })

app.use('/api/diagnoses', diagnosesRouter)
app.listen(port, () => console.log(`server running at port ${port}`)) 