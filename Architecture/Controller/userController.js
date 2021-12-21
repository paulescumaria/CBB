const { createUserServices, loginServices } = require('../Services/userServices')

const createUserController = async (req,res) => {
    res.setHeader('Content-Type', 'application/json')

    try {
        await createUserServices(req,res)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

const loginController = async (req,res) => {
    res.setHeader('Content-Type', 'application/json')

    try {
        await loginServices(req,res)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { createUserController,
                   loginController }