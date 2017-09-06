const express = require('express')
const app = express()
const router = express.Router();

app.use(express.static('public'));
app.use(express.static('node_modules'));
require('./router.js')(app);
app.set('views',__dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(9999, function () {
  console.log('RabbitMQ app listening on port 9999')
})