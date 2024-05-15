const addToCartModel = require("../../models/cartProductModels");

const addToCartController = async (req, res) => {
    try {

        const { productId } = req?.body;
        const currentUser = req.userId;
        console.log(productId)


        // check existing in add to cart
        const isProductAlreadyAdded = await addToCartModel.findOne({ productId })
        console.log("add to cart", isProductAlreadyAdded)
        if (isProductAlreadyAdded) {
            return res.json({
                message: "already added in cart",
                success: false,
                error: true
            })
        }

        // product details
        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser
        }

        // saved in the database 
        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save()


        res.status(200).json({
            data: saveProduct,
            error: false,
            success: true,
            message: "Added in the cart"
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = addToCartController