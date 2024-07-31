const express = require("express");
const app = express();
let reqData = "";
const symbol = "/?!@#$%&*";
const num = "123456789";
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = "abcdefghijklmnooqrstuvwxyz";
const cors = require("cors");

const port = 8080;

app.use(express.json());
app.use(express.text());
app.use(cors());

app.get("/", (req, res) => {
  res.send(reqData);
});

app.post("/", (req, res) => {
  const payload = req.body.input;
  let Data = capital + small + num + symbol;
  for (let i = 1; i <= payload; i++) {
    let value = Math.floor(Math.random() * Data.length);

    reqData += Data[value];
    console.log(reqData);
  }
  res.send(reqData);
});

app.listen(port, () => {
  console.log("server runnning in " + port);
});
