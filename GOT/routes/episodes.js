import express from "express";
import Episodes from "../models/Episodes.js";

//const router = express.Router();
const episodesRoutes = express.Router();

episodesRoutes.get("/", async (req, res) => {
  const episodes = await Episodes.find({});
  // characters.save();
  res.json(episodes);
});

/*router.get("/Episodes", (req, res) => {
  res.send("Hello");
});
*/
//export default router;
export default episodesRoutes;
