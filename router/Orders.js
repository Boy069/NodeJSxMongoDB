const express = require('express');
const router = express.Router();

const { getOeders, getOeders1One, createOeders, updeteOeders, deleteOeders } = require("../controllers/ordersController");
//getOeders
router.get("/", getOeders);

router.get("/user", getOeders1One);
//createOeders
router.post("/", createOeders);
//updeteOeders
router.put("/:id", updeteOeders);
//deleteOeders
router.delete("/:id", deleteOeders);

module.exports = router;