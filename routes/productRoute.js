const express = require('express')
const router = express.Router()
const {getAllProducts,createProduct,updateProduct,getProduct, deleteProduct} = require('../controllers/productController')

router
.get('/',getAllProducts)
.get('/:id',getProduct)
.post('/',createProduct)
.put('/:id',updateProduct)
.delete('/:id',deleteProduct)

module.exports = router