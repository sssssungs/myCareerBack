const mongoose = require('mongoose');

module.exports = () => {
  function connect() {
    mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    var db = mongoose.connection;
    db.on('error', function(){
        console.log('Connection Failed!');
    });
    db.once('open', function() {
        console.log('Connected!');
    });
  }
  connect();
};