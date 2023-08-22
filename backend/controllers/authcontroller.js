const User = require("../models/User");
const { generateToken } = require("../config/generateToken");
const bcrypt = require("bcryptjs");

module.exports.SignUp = async (req, res, next) => {
    const {email, password, username, firstname, lastname } = req.body;
    const exists = await User.findOne({ email });
    console.log("Exists", exists, req.body);
    if(exists){
        return res.json({ message: "User account already exisits" });
    }

    console.log(email, password, username, firstname, lastname);
    const user = await User.create({ email, password, username, firstname, lastname });
    const token = generateToken(user._id);

    res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false
    });

    res.status(200).json({ message: "User signed in", success: true, user});
}
