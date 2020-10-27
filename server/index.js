const cors = require('cors')
const mysql = require('mysql')
const express = require('express')
const app = express()

app.use(cors())

app.get('/api/getArticle', (req, res, next) => {
  res.json({
    data: '后端返回数据结果 - getArticle'
  })
})

mysql.createConnection({
  host: '39.100.126.197',
  user: 'root',
  password: '123456'
}).connect((error) => {
  if (error) throw error
  console.log('Mysql DataBase Is Connecting Successful.')
})

app.listen(3000, () => {
  console.log('Server Port Is Active(3000).')
})