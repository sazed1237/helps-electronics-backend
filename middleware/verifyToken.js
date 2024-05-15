const jwt = require('jsonwebtoken');


async function verifyToken(req, res, next) {
    try {
        const token = req.cookies?.token
        // console.log("inside verify token", token)
        if (!token) {
            return res.status(400).json({
                message: "Please login...",
                error: true,
                success: false
            })
        }

        // verify a token symmetric
        jwt.verify(token, process.env.SECRET_TOKEN_KEY, function (err, decoded) {
            console.log(err)
            // console.log("decoded", decoded)

            req.userId = decoded?._id
            next()
        });


    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            data: [],
            error: true,
            success: false,
        })
    }
}

module.exports = verifyToken