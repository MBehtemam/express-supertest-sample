const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ hope: "loop" });
});

app.post("/", (req, res) => {
  const { name } = req.body;
  if (!name || name === undefined) {
    res.statusCode(400);
  }
  res.json({ input: name });
});

module.exports = app;
