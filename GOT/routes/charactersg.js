import express from "express";
import Charactersg from "../models/Charactersg.js";

//const router = express.Router();
const charactersgRouter = express.Router();

charactersgRouter.get("/", async (req, res) => {
  const characters = await Charactersg.find({});
  // characters.save();
  res.json(characters);
});

/*router.get("/charactersg", (req, res) => {
  res.send("Hello");
});
*/
//export default router;
export default charactersgRouter;
