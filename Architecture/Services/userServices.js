const { model } = require('mongoose')
const User = require('../Model/userData')


const createUserServices = async (req, res) => {
    const user = new User({
        userEmail: req.body.email,
        userPassword: req.body.password,
        isAdmin: req.body.admin
    })

    try {
        const saveRespons = await user.save()
        res.status(201).json(saveRespons)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
    
}

const loginServices = async (req,res) => {
    try {
        const findUser = await User.findOne(req.body)
        res.status(201).json(findUser)
    } catch(err) {
        res.status(400).json({ message: "User not find"})
    }
}

module.exports = { createUserServices,
                   loginServices
}