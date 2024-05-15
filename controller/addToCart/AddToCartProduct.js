const addToCartModel = require("../../models/cartProductModels");

const addToCartProductController = async (req, res) => {
    try {

        const userId = req.userId;

        const cartProduct = await addToCartModel.find({ userId: userId }).populate("productId")
        // console.log(cartProduct)

        res.json({
            message: " All Cart Product",
            success: true,
            error: false,
            data: cartProduct
        })


    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = addToCartProductController