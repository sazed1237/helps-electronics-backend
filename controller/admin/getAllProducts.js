const productModel = require("../../models/productModels")

const getAllProductsController = async (req, res) => {
    try {
        const allProducts = await productModel.find().sort({ createdAt: -1 })

        res.json({
            message: "all products",
            success: true,
            error: false,
            data: allProducts
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = getAllProductsController