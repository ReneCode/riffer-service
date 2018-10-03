const express = require("express");
const HttpStatus = require("http-status-codes");

const router = express.Router();

const repository = require("./deviceRepository");

// get all entities
router.get("/", (req, res) => {
  res.json(repository.getAll());
});

// get one entity
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const result = repository.getById(id);
  if (result) {
    res.json(result);
  } else {
    res.status(HttpStatus.NOT_FOUND);
    res.send(`Id:${id} not found`);
  }
});

// req can be array or single object
router.post("/", (req, res) => {
  const input = req.body;
  let response;
  if (Array.isArray(input)) {
    repository.addMany(input);
  } else {
    response = repository.addOne(input);
  }

  res.send(HttpStatus.CREATED, response);
});

module.exports = router;
