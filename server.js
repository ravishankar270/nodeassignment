//Imports
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
const router = require('./routes/index')

//mongoose connection

mongoose.connect('mongodb://localhost:27017/app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})



//app
const app = express()
const port = 3000

//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',router)



//Starting the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})