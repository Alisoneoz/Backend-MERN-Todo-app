const express = require("express");
const requireAuth = require("../middleware/requireAuth");

const {
  listAllTodo,
  getSingleTodo,
  createOneTodo,
  updateOneTodo,
  deleteTodo,
} = require("../controllers/controllers");

const router = express.Router();

// require auth for all Todo routes
router.use(requireAuth);

router.get("/", listAllTodo);

router.get("/:id", getSingleTodo);

router.post("/", createOneTodo);

router.put("/:id", updateOneTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
