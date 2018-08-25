const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const ordersRoutes = require('./routes/orders')

const app = express()

// logging, should be the first app.use
app.use(morgan('dev'))

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  // middleware
  // check authorization or other things
  next()
})

app.use('/orders', ordersRoutes)

// route not handled - handler ;-)
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

// error handling - should be the last use
app.use((error, req, res, next) => {
  // catches all errors of the app
  res.status(error.status || 500)
  res.json({
    error: {
      message: 'sorry - some error happens'
    }
  })
})

module.exports = app
