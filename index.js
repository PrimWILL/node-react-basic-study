const express = require('express') // express module 가져오기
const app = express() // 새로운 express 생성
const port = 5000 // 5000번 port를 서버로 둔다
const bodyParser = require('body-parser');

const config = require('./config/key');
const { User } = require("./models/User"); // User를 가져옴

// bodyParser가 client에서 오는 정보를 서버에서 
//분석해서 가져올 수 있게 함
// application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
// json으로 된 파일을 분석해서 가져올 수 있게 함
app.use(bodyParser.json());






const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err=> console.log(err))

app.get('/', (req, res) => res.send('Hello World! ~~ 안녕하세요 nodejs!!'))

app.post('/register', (req, res) => {

   //회원 가입 할 대 필요한 정보들을 client에서 가져오면
   // 그것들을 데이터 베이스에 넣어준다.
  
        // bodyparser의 기능을 이용해 req.body로 보내는 client의 정보를 받아줌
        const user = new User(req.body)

        // save(): mongoDB에서 오는 method
        user.save((err, userInfo) => {
            if(err) return res.json({ success: false, err})
            // 성공하지 못했을 시 json파일로 에러메시지와 함께 알려줌
            return res.status(200).json({
                // status(200) : 성공했음을 나타내는 표시
                success: true
            })
        }) // 정보들이 user model에 저장됨
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))