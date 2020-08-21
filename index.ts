import express from 'express'
const cors = require( 'cors')
const app = express()

app.use(cors())

const port = 3001 || process.env.PORT

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.listen(port, () => console.log(`server running at port ${port}`))