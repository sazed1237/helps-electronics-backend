const productModel = require("../../models/productModels");

const getCategoryWiseProductController = async (req, res) => {
    try {

        // console.log("category wise product", req.query.category)
        const category = req.query.category

        // Find products for the specified category, sorted by createdAt field in descending order
        const product = await productModel.find({ category }).sort({ createdAt: -1 })

        res.json({
            message: 'Category wise products (descending)',
            success: true,
            error: false,
            data: product
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = getCategoryWiseProductController