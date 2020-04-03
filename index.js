const express = require('express') // express module 가져오기
const app = express() // 새로운 express 생성
const port = 5000 // 5000번 port를 서버로 둔다

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jiyoon:jy0403@boilderplate-ajvza.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err=> console.log(err))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))