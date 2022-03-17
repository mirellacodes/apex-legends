import express from "express";
import app from ".";
const router = express.Router();
import {
  getAllCharacters,
  getCharacterbyID,
  createCharacter,
} from "../models/index";

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

// Create a character (C)

app.post("/characters", function (req, res) {
  const characterCreated = createCharacter(req.body);
  res.json({ success: true, payload: characterCreated });
});

export default app;
