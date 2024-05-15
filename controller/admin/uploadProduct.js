const adminPermission = require("../../helpers/adminPermission");
const productModel = require("../../models/productModels")

async function uploadProductController(req, res) {
    try {

        const sessionUserId = req.userId;
        // console.log("sessionId", sessionUserId)

        if (!adminPermission(sessionUserId)) {
            throw new Error("Permission denied")
        }

        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()

        res.status(201).json({
            message: "Product uploaded Successfully",
            error: false,
            success: true,
            data: saveProduct
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = uploadProductController