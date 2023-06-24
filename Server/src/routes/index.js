const express = require("express");
const deleteFav = require("../controllers/deleteFav");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFavorite = require("../controllers/postFavorite");
const postUser = require("../controllers/postUser");
const router = express.Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFavorite);
router.delete("/fav/:id", deleteFav);

module.exports = router;
