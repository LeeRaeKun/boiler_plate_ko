const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
const { User } = require("./models/User");
const bodyParser = require('body-parser');

const config= require('./config/key');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, { 
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connect ....'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~이래근')
})

app.post('/register', (req, res) => {
  // 회원가입할때 필요한 정보들을 Client에서 가져오면 
  // 그것들을 데이터베이스에 넣어준다
  
  const user = new User(req.body)

  user.save((err, doc) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({ success: true})
  }) ;
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})