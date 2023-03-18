import express from "express";
import charactersg from "../controllers/charactersg.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

export default router;
