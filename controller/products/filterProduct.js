const productModel = require("../../models/productModels");

const filterProductController = async (req, res) => {
    try {

        const categoryList = req?.body?.category || []


        const products = await productModel.find({
            category: {
                "$in": categoryList
            }
        })

        console.log("filter", products)

        res.json({
            message: "filtered Products",
            success: true,
            error: false,
            data: products
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = filterProductController