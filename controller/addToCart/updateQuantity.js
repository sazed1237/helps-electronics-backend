const addToCartModel = require("../../models/cartProductModels")

const updateQuantityController = async (req, res) => {
    try {
        const currentUserId = req.userId
        const addToCartProductId = req.body._id
        const qty = req.body.quantity

        // console.log("id", addToCartProductId, "qty", qty)

        const updateQuantity = await addToCartModel.findByIdAndUpdate(addToCartProductId, {

            ...(qty && { quantity: qty }) // qty is available then change the quantity
        })


        res.json({
            message: 'quantity updated',
            success: true,
            error: false,
            data: updateQuantity
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}


module.exports = updateQuantityController