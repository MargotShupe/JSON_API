import express from "express";
import bodyParser from "body-parser";
import charactersgRoutes from "./routes/charactersg.js";
const app = express();

app.listen(8000, () => console.log("Winter is comming"));
app.use(bodyParser.json());

app.use("/charactersg", charactersgRoutes);

// testing my app get
app.get("/", (req, res) => {
  console.log();

  res.send("You know nothing");
});
