const userModel = require("../../models/userModels");

async function updateUser(req, res) {
    try {

        const sessionUser = req.userId;
        const { userId, name, email, role } = req.body;

        const payload = {
            ...(email && { email: email }),
            ...(name && { name: name }),
            ...(role && { role: role })
        }

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)

        const currentUser = await userModel.findById(sessionUser)
        // console.log("current user", currentUser.role)

        res.json({
            message: 'user updated',
            data: updateUser,
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

module.exports = updateUser