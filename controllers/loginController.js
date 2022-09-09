const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const dotenv = require('dotenv')
dotenv.config()
const loginController = async (req, res) => {
    const {
        email,
        password
    } = req.body
    const user = await User.findOne({
        email
    }).lean()
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "Wrong email/Password"
        })
    } else {
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (isPasswordMatch) {
            const accessToken = jwt.sign({
                id: user._id
            }, process.env.JWT_SECRET);
            return res.status(200).json({
                success: true,
                message: "Logged In successfully",
                accessToken
            })
        }
        return res.status(404).json({
            success: false,
            message: "Wrong email/Password"
        })
    }
}
module.exports = loginController