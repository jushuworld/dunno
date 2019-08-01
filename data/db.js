require("dotenv").config();
const db = require('mongoose');

db.connect(`${process.env.DB_URL}`, {useNewUrlParser: true});
db.connection.once("open", () => {
    console.log("DB is connected, Boss");
  });

//first parameter 'messages' is for the collection name;
//second parameter 'message: Array' will be the key in the database = req.body.comments
const comment = db.model('messages', { message: Array });

module.exports = comment;