require('dotenv').config({ path: '../.env' })
const express = require('express')
const helmet = require('helmet')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const db = require('./app/db')
app.use(helmet())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(cors())
app.use(morgan('dev'))
this.init = async () => {
  await db.connect()
  app.use(require('./app/routes'))
}
this.init()
module.exports = app
