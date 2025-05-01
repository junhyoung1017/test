const express = require('express');
const app = express();
const port = 3000;
// body 데이터 파싱을 위한 미들웨어
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));
// 객체를 "key: value" 형태로 변환하는 함수
const stringifyObj = obj =>
    Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
// GET 요청 처리
app.get('/', (req, res) => {
    res.render('login');
  });
  
  // POST 요청 처리
app.post('/login', (req, res) => {
    const { username, password, introduction } = req.body;
    res.send(`Username: ${username}, Password: ${password}, Intro: ${introduction}`);
  });
  
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
