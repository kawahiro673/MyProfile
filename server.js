console.log('node.js');
var express = require('express'); //Express使う定型分
var app = express(); //expressオブジェクトでappインスタンス作成
const http = express('http');
const mailer = require('./mailer');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/contact', mailer);

app.listen(process.env.PORT || 6060, () => {
  console.log('サーバー接続成功');
});
