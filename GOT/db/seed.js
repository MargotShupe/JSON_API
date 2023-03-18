// import models
import mongoose from "./connection.js";
import Charactersg from "../models/Charactersg.js";
import Episodes from "../models/Episodes.js";
// import our json data
import charactersgdata from "../db/charactersg.json" assert { type: "json" };
import episodesdata from "../db/episodes.json" assert { type: "json" };
// insert our json data into the data base (with our model)
async function seed() {
  await Charactersg.deleteMany({});
  await Charactersg.create(charactersgdata);

  process.exit();
}
seed();
