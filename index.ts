import express from 'express'
const app = express()

const port = 3001 || process.env.PORT

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.listen(port, () => console.log(`server running at port ${port}`))