const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {router} = require('./Architecture/Routes/appRoutes')
const port = process.env.PORT || 8080

mongoose.connect("mongodb+srv://Alexandra:.Qwerty.123@cookbookcluster.appmy.mongodb.net/cookbookdb?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.use('/api', router)

app.listen(port, () => console.log('Server Started'))