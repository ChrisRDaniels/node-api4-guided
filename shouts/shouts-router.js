const express = require("express");
const shoutsModel = require("./shouts-model");

const router = express.Router();

// router.get("/",(req, res, next) => {
// 	shoutsModel.find()
// 		.then((data) => res.status(200).json(data))
// 		.catch((err) => next(err))
// })

// async await syntax
router.get("/", async (req, res, next) => {
 try {
  const data = await shoutsModel.find();
  res.status(200).json(data);
 } catch (err) {}
});

router.get("/:id", async (req, res, next) => {
 try {
  const data = await shoutsModel.findById(req.params.id);
 } catch (err) {
  next(err);
 }
});

router.post("/", async (req, res, next) => {
 try {
  const data = await shoutsModel.add(req.body);
  res.status(201).json(data);
 } catch (err) {
  next(err);
 }
});

module.exports = router;
