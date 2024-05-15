const userModel = require("../../models/userModels")

async function allUsers(req, res) {
    try {
        console.log(req.userId)
        const allUsers = await userModel.find()

        res.json({
            message: 'all users',
            data: allUsers,
            success: true,
            error: false
        })


    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = allUsers