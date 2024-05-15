const adminPermission = require("../../helpers/adminPermission");
const productModel = require("../../models/productModels")

const updatedProductController = async (req, res) => {
    try {
        // check current user is an admin or not
        const sessionUserId = req.userId; //userId coming from middleware decoded
        if (!adminPermission(sessionUserId)) {
            throw new Error("Permission denied")
        }

        const { productId, ...resBody } = req.body;

        const updatedProduct = await productModel.findByIdAndUpdate(productId, resBody)

        res.json({
            message: "product updated",
            success: true,
            error: false,
            data: updatedProduct
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = updatedProductController