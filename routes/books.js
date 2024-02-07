const express = require("express");
const router = express.Router();

const BookController = require("../controllers/index");

router.get("/", BookController.getAllBooks);

router.get("/:id", BookController.getSingleTitle);

router.post("/", BookController.createTitle);

module.exports = router;
