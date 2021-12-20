const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('../express-app/Architecture/Routes/appRoutes')

mongoose.connect('mongodb://localhost/cookbookdb', { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.use('/api', route)

app.listen(8080, () => console.log('Server Started'))