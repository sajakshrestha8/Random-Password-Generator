const express = require("express");
const app = express();
const reqData = [];
const symbol = "/?!@#$%&*";
const num = "123456789";
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = "abcdefghijklmnooqrstuvwxyz";

const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Checking my res");
});

app.post("/", (req, res) => {
  const payload = req.body;
  let Data = symbol + num + capital + small;
  for (let i = 0; i <= 7; i++) {
    let value = Math.random(Data);
    console.log(value);
  }
  res.send(payload);
});

app.listen(port, () => {
  console.log("server runnning in " + port);
});
