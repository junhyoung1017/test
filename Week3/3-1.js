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
app.get('/', (req, res) => {
    const query = req.query;
    res.send(stringifyObj(query));
  });
  
  // POST 요청 처리
  app.post('/', (req, res) => {
    const body = req.body;
    res.send(stringifyObj(body));
  });
  
  // PUT 요청 처리
  app.put('/', (req, res) => {
    const body = req.body;
    res.send(stringifyObj(body));
  });
  
  // DELETE 요청 처리
  app.delete('/', (req, res) => {
    const body = req.body;
    res.send(stringifyObj(body));
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });  
