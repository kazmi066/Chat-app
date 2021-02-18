const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("asdads");
});

module.exports = router;
