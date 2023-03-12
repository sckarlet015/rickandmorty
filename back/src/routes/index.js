const {Router} = require("express");
//Controllers
const getCharById = require("../controllers/getCharById.js")
const getCharDetail = require("../controllers/getCharDetail.js");
const postFavorite = require("../controllers/postFavorites.js");
const getFavorite = require("../controllers/getFavorites.js");
const deleteFavorite = require("../controllers/deleteFavorite.js");
const getAllChars = require("../controllers/getAllChars.js");


const router = Router();

router.get("/onsearch/:id", getCharById)
router.get("/detail/:id", getCharDetail)
router.get("/fav", getFavorite)
router.post("/fav", postFavorite)
router.delete("/fav/:id", deleteFavorite)
router.get("/all", getAllChars)


module.exports = {router};