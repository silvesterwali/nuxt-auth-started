require('dotenv').config({ path: '../.env' })
const express = require('express')
const helmet = require('helmet')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
app.use(helmet())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(cors())
app.use(morgan('dev'))
app.use(require('./app/routes'))
module.exports = app
