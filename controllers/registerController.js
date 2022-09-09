const bcrypt = require('bcryptjs')
const User = require('../models/User')
const registerController = async (req, res) => {
    const {
        name,
        email,
        phoneNo,
        password,
        img_url
    } = req.body
    const hashedPass = await bcrypt.hash(password, 1)
    const response = await User.create({
        name,
        email,
        phoneNo,
        password: hashedPass,
        img_url
    })

    return res.status(200).json(response)
}
module.exports = registerController