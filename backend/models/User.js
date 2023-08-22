const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        email: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model('User', UserSchema);