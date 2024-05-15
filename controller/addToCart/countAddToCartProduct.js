const addToCartModel = require("../../models/cartProductModels")

const countAddToCartProductController = async (req, res) => {
    try {

        const userId = req.userId

        const productCount = await addToCartModel.countDocuments({ userId: userId })

        res.json({
            message: "Cart Product Count",
            success: true,
            error: false,
            data: productCount
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}


module.exports = countAddToCartProductController