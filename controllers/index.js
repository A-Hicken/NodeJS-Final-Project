const { mongo } = require("mongoose");
const books = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const firstFunction = (req, res) => {
  res.json("Hello from my route");
};

// GET all books
const getAllBooks = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("Books").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application.json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET single Book
const getSingleTitle = async (req, res) => {
  try {
    const bookId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .colletion("Library")
      .find({ _id: bookId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//CREATE Book Title
const createTitle = async (req, res) => {
  try {
    const book = {
      title: req.body.title,
      genre: req.body.genre,
      publishedYear: req.body.publishedYear,
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection("Library")
      .insertOne(book);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(response.error || "Error has occured while creating new Title.");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//UPDATE Book Title
const updateTitle = async (req, res) => {
  try {
    const bookId = new ObjectId(req.params.id);
    const book = {
      title: req.body.title,
      genre: req.body.genre,
      publishedYear: req.body.publishedYear,
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection("Library")
      .replaceOne({ _id: bookId }, book);
    if (response.acknowledged) {
      res.status(204).json(response);
    } else {
      res
        .status(500)
        .json(response.error || "Error occured while updating the Title.");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE single Book
const deleteTitle = async (req, res) => {
  try {
    const bookId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection("Library")
      .deleteOne({ _id: bookId }, true);
    console.log(response);
    if (response.acknowledged) {
      res.status(200).send(response);
    } else {
      res
        .status(500)
        .json(response.error || "Error occured while deleting the Title.");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  firstFunction,
  getAllBooks,
  getSingleTitle,
  updateTitle,
  createTitle,
  deleteTitle,
};
