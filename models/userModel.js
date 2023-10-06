const mongooes = require('mongoose');

const userSchema = mongooes.Schema({
    username: {
        type: String,
        required: [true, "please add username"],
    },
    email: {
        type: String,
        required: [true, "Please add user email"],
        unique: ['true', "Email address already taken!"],
    },
    password: {
        type: String,
        required: [true, 'Please add password!'],
    },
}, {
    timestamps: true,
})

module.exports = mongooes.model(
    "User", userSchema
)