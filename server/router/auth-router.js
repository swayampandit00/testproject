const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");

//router.get("/", (req, res)=> {
//    res.status(200).send("routing page");
//});

router.route("/").get(authControllers.home);



module.exports = router;