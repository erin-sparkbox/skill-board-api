const express = require("express");
const router = express.Router();


router.get("/", (req, res, next) => {
    res.send('On Student Page! (Get)')
  });

router.post("/", (req, res, next) => {
    res.send('On Student Page! (post)')
  });

module.exports = router;