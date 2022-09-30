const express = require('express')
const app = express();   
const path = require('path') 

let indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {console.log('app rodando')})