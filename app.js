const express = require('express')
const productRouter = require('./routes/productRoute')

//initialize express app
const app = express()

//global middleware
app.use(express.json())
// app.use(express.urlencoded({extended:true}))

//routes
app.use('/api/v1/products',productRouter)

module.exports = app;