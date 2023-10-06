const express = require("express")

const {
    loginUser,
    registerUser,
    currentUser
} = require("../controllers/userController");
const validToken = require("../middleware/validationTokenHandler");

const router = express.Router();

router.post("/login", loginUser)
router.post("/register", registerUser)
router.get("/current", validToken, currentUser)

module.exports = router;