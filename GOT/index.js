import express from "express";
import bodyParser from "body-parser";
//import charactersgRoutes from "./routes/charactersg.js";

const app = express();

app.use(bodyParser.json());

//middleware
app.use(express.json());

// testing my app get
app.get("/", async (req, res) => {
  res.send("You know nothing");
});

//app.use("/Charactersg", charactersgRoutes);

app.listen(8000, () => console.log("Winter is comming"));

//get characters
/*app.get("/charactersg", async (req, res) => {
  const characters = await Charactersg.find({});
  characters.save();
  res.json(characters);
});
*/
