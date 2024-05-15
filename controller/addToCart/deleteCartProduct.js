const addToCartModel = require("../../models/cartProductModels")

const deleteCartProductController = async (req, res) => {
    try {

        const userId = req.userId
        const id = req.body._id
        console.log(id)

        const deleteCartProduct = await addToCartModel.findByIdAndDelete(id)

        res.json({
            message: "Deleted successful",
            success: true,
            error: false,
            data: deleteCartProduct
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = deleteCartProductController