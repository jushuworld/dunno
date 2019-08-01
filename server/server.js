const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const dbController = require("./dbController");
const cors = require("cors");

app.use(cors());

app.use(express.static(path.join(__dirname, "/client")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//when client post a data, the middleware takes that 'req' and create the model in 'res'
//and return to the callback that sends the 'res.locals.data' to the client
app.post("/comments", dbController.insertComment, (req, res) => {
  res.json(res.locals.data);
});

// ("/comments") means the server's address. In server localhost:3000/comments, the data will show up
app.get("/comments", dbController.getComment, (req, res) =>
  res.status(200).json(res.locals.data)
);

app.listen(PORT, () => console.log(`Running on JUSHUWORLD's SERVER!`));

