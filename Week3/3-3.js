const express = require('express');
const app = express();
const port = 3000;
// body 데이터 파싱을 위한 미들웨어
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 객체를 "key: value" 형태로 변환하는 함수
const stringifyObj = obj =>
    Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
// GET 요청 처리
const factorial = n => {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  };
app.get('/factorial/', (req, res) => {
    const { number } = req.query;
    if (!number || isNaN(number)) {
    return res.status(400).send('Invalid number');
    }
    res.redirect(`/factorial/${number}`);
  });
  app.get('/factorial/:number', (req, res) => {
    const { number } = req.params;
  const num = parseInt(number);
  if (isNaN(num) || num < 0) {
    return res.status(400).send('Invalid number');
    }

    const result = factorial(num);
    res.send(`Factorial of ${num} is ${result}`);
  });
app.listen(port, () => {
    console.log(`✅ Server listening on port ${port}`);
  });