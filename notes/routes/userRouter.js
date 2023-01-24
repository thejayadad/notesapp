const router = require("express").Router()
const userController = require("../controllers/userController");
const auth = require('../middleware/auth')



//REGISTER USER
router.post("/register", userController.registerUser);

//LOGIN USER
router.post("/login", userController.loginUser);

//VERIFY TOKEN
router.get('/verify', userController.verifiedToken)



module.exports = router