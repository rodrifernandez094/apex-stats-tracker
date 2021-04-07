const router = require("express").Router();
const getUserData = require("../controllers/userData");

router.get("/:platform/:username", getUserData)

module.exports = router;
