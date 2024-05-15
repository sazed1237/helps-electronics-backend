const productModel = require("../../models/productModels");

const getProductDetailsController = async (req, res) => {
    try {

        // console.log('product details', req.query)
        const id = req?.query;
        console.log('product details', id)

        const productDetails = await productModel.findById(id)
        console.log(productDetails)


        res.json({
            message: 'product details',
            success: true,
            error: false,
            data: productDetails
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = getProductDetailsController