const express = require('express')
const app = express()

const port = 3001 || process.env.PORT

app.listen(() => console.log(`server running at port ${port}`))