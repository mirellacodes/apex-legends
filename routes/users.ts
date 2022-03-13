import express from "express";
import app from ".";
const router = express.Router();
import { getAllCharacters, getCharacterbyID } from "../models/index";

// Check if port is listening...

// app.get("/", function (req, res) {
//   res.json({ message: "hello world" });
// });

// CRUD

/* GET all characters. (R) */
app.get("/characters", function (req, res) {
  res.json({ success: true, payload: getAllCharacters() });
});

// GET a character by ID (R)
app.get("/characters/:id", function (req, res) {
  let id = Number(req.params.id);
  res.json({ success: true, payload: getCharacterbyID(id) });
});

export default router;
