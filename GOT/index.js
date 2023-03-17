import express from "express";
import bodyParser from "body-parser";
const app = express();

app.listen(8000, () => console.log("Winter is comming"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log();

  res.send("You know nothing");
});
