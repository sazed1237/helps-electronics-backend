const express = require('express');
const router = express.Router()

const userSingUpController = require("../controller/user/UserSingUp")
const userSingInController = require("../controller/user/userSingIn");
const userDetailsController = require('../controller/user/userDetails');
const verifyToken = require('../middleware/verifyToken');
const userLogout = require('../controller/user/userLogOut');
const allUsers = require('../controller/admin/allUsers');
const updateUser = require('../controller/admin/updateUser');
const uploadProductController = require('../controller/admin/uploadProduct');
const getAllProductsController = require('../controller/admin/getAllProducts');
const updatedProductController = require('../controller/admin/updatedProduct');
const getCategoryProductController = require('../controller/products/getCategoryProduct');
const getCategoryWiseProductController = require('../controller/products/getCategoryWiseProduct');
const getProductDetailsController = require('../controller/products/getProductDetails');
const addToCartController = require('../controller/addToCart/addToCart');
const countAddToCartProductController = require('../controller/addToCart/countAddToCartProduct');
const addToCartProductController = require('../controller/addToCart/AddToCartProduct');
const updateQuantityController = require('../controller/addToCart/updateQuantity');
const deleteCartProductController = require('../controller/addToCart/deleteCartProduct');
const searchProductsController = require('../controller/products/searchProducts');
const filterProductController = require('../controller/products/filterProduct');

router.post('/singup', userSingUpController)
router.post('/singin', userSingInController)
router.get('/user-details', verifyToken, userDetailsController)
router.get('/logout', userLogout)


// Admin panel
router.get('/all-users', verifyToken, allUsers)
router.post('/update-user', verifyToken, updateUser)

// admin products 
router.post('/upload-product', verifyToken, uploadProductController)
router.get('/get-products', getAllProductsController)
router.post('/update-product', verifyToken, updatedProductController)

// products for all
router.get('/get-product-category', getCategoryProductController)
router.get('/category-product', getCategoryWiseProductController)
router.get('/product-details', getProductDetailsController)
router.get('/search-products', searchProductsController)
router.post('/filter-products', filterProductController)


// add to cart
router.post('/add-to-cart', verifyToken, addToCartController)
router.get('/count-cart-product', verifyToken, countAddToCartProductController)
router.get('/add-to-cart-product', verifyToken, addToCartProductController)
router.put('/update-cart-quantity', verifyToken, updateQuantityController)
router.delete('/delete-cart-product', verifyToken, deleteCartProductController)



module.exports = router