const userModel = require("../models/userModels")

const adminPermission = async (userId) => {
    const user = await userModel.findById(userId)
    // console.log('admin Permission', userId)

    if (user.role == "ADMIN") {
        return true;
    }

    return false
}

module.exports = adminPermission