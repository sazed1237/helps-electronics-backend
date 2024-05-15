const productModel = require("../../models/productModels");

const getCategoryProductController = async (req, res) => {
    try {
        // Get distinct categories
        const productCategories = await productModel.distinct("category");

        // Array to store the second product of each category
        const productsByCategory = [];

        // Iterate through each category
        for (const category of productCategories) {
            // Find the second product in the current category, skipping the first one
            const product = await productModel.findOne({ category }).skip(1);

            // If a product is found, push it to the array
            if (product) {
                productsByCategory.push(product);
            }
        }

        res.json({
            message: "Second product in each category",
            success: true,
            error: false,
            data: productsByCategory
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
};

module.exports = getCategoryProductController;
