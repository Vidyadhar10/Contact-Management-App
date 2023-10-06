const asyncHandler = require("express-async-handler")
const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")




//get user
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('All fields are mandatory')
    }

    const userAvailable = await userModel.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error('User already exists')
    }
    const hashedPass = await bcrypt.hash(password, 10);
    console.log('hashed pass ', hashedPass);

    const user = await userModel.create({
        username,
        email,
        password: hashedPass,
    });
    console.log(`User has been created: ${user}`);

    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.status(200).json({ "msg": "register user" })

})
//get user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user = await userModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
        );

        res.status(200).json({ accessToken })
    } else {
        res.status(401);
        throw new Error("email or password is not valid")
    }
    res.status(200).json({ "msg": "login user" })
})


//get user
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user)
})


module.exports = { registerUser, loginUser, currentUser };