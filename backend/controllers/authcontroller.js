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
    next();
}

module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if(!email || !password ){
            return res.json({message:"All fields are required"})
        }
        const user = await User.findOne({ email });
        if(!user){
            return res.json({message:"Incorrect password or email" }) 
        }
        const auth = await bcrypt.compare(password,user.password)
        if (!auth) {
            return res.json({message:"Incorrect password or email" }) 
        }
        const token = generateToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(200).json({ message: "User logged in", success: true });
        next()
    } catch (error) {
        console.error(error);
    }
  }