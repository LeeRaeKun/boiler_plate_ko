const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://rgtwins:lgsj0224@boilerplate.m2jyy.mongodb.net/<dbname>?retryWrites=true&w=majority', { 
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connect ....'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~이래근')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})