const productModel = require("../../models/productModels")

const searchProductsController = async (req, res) => {
    try {

        const query = req?.query?.q
        // console.log(query)

        const regex = new RegExp(query, 'i', 'g')
        const searchProducts = await productModel.find({
            "$or": [
                {
                    productName: regex
                },
                {
                    category: regex
                }
            ]
        })

        res.json({
            message: "Search Products",
            success: true,
            error: false,
            data: searchProducts
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = searchProductsController