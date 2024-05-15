const userModel = require("../../models/userModels")
const bcrypt = require('bcryptjs');


async function userSingUpController(req, res) {
    try {
        const { email, password, name } = req.body

        const user = await userModel.findOne({ email })

        if (user) {
            throw new Error("User Already have an account")
        }

        if (!email) {
            throw new Error("Please enter email")
        }

        if (!password) {
            throw new Error("Please enter password")
        }

        if (!name) {
            throw new Error("Please enter name")
        }

        console.log("in controller", email, password, name)
        // Create Hash Password for DB
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error('Something is wrong in the hash')
        }

        const payload = {
            ...req.body,
            role: 'GENERAL',
            password: hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: 'User created Successfully'
        })

    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = userSingUpController 