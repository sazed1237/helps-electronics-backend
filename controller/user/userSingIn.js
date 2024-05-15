const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModels');
const jwt = require('jsonwebtoken');


async function userSingInController(req, res) {
    try {
        const { email, password } = req.body

        if (!email) {
            throw new Error("Please enter email")
        }

        if (!password) {
            throw new Error("Please enter password")
        }


        const user = await userModel.findOne({ email })
        if (!user) {
            throw new Error("User not found")
        }

        const checkPassword = await bcrypt.compare(password, user.password)
        // console.log("checkPassword", checkPassword)

        if (checkPassword) {
            // generate jsonwebtoken 
            const tokenData = {
                _id: user._id,
                email: user.email
            }
            const token = await jwt.sign(tokenData, process.env.SECRET_TOKEN_KEY, { expiresIn: '8h' });

            const tokenOption = {
                httpOnly: true,
                secure: true
            }

            res.cookie("token", token, tokenOption).json({
                message: "login Successfully",
                data: token,
                success: true,
                error: false
            })


        } else {
            throw new Error("Please check password")
        }


    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = userSingInController