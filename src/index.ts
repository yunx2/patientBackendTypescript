import express from 'express'
const cors = require( 'cors')

import diagnosesRouter from './routes/diagnoses'
import patientsRouter from './routes/patients'

const app = express()
app.use(cors())

app.use('/api/diagnoses', diagnosesRouter)
app.use('/api/patients', patientsRouter)

const port = 3001 || process.env.PORT

app.listen(port, () => console.log(`server running at port ${port}`)) 