var amqp = require('amqplib/callback_api');

module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('app.html')
     });

     app.post('/api/message/:msg', function(req, res) {
        amqp.connect('amqp://localhost', function(err, conn) {
            conn.createChannel(function(err, ch) {
              const q = 'matt_test';
              let msg = req.params.msg;
              ch.assertQueue(q, {durable: false});
              ch.sendToQueue(q, new Buffer(msg));
              console.log("Sent %s", msg);
              res.sendStatus(200);
            });
        });
    });
}