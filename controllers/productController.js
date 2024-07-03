const Product = require('../models/productModel')

// CREATE a product ( admin )
const createProduct = async (req, res, next) => {
    try {
        const { name, description, price, stock, category, images, reviews } = req.body;
        const product = await new Product({name, description, price, stock, category, images, reviews}).save()
        res.status(201).json({
            success: true,
            product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// GET all products
const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json({
            success:true,
            products
        })
    }catch(err){
        res.status(500).json({
            success:true,
            message:err.message
        })
    }
}

// get single Product
const getProduct = async (req,res) => {
    try{
        const {id} = req.params

        const product = await Product.findById(id)

        if(!product){
            return res.status(404).json({
                success:true,
                message:"Product not found"
            })
        }

        res.status(200).json({
            success:true,
            product
        })


    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        }
        )
    }
}

// update Product - (admin)
const updateProduct = async (req,res) => {
    try{
        const {id} = req.params

        const product = await Product.findById(id);

        if(!product){
            return res.status(404).json({
                success:false,
                message:"Product not found"
            })
        }

        const updatedProduct = await Product.findByIdAndUpdate(id,req.body,{new:true})

        res.status(200).json({
            success:true,
            updatedProduct
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

// delete Single Product
const deleteProduct = async (req,res) => {
    try{
       const {id} = req.params

       let product = await Product.findById(id)

       if(!product){
        return res.status(404).json({
            success:false,
            message:"Product not found"
        })
       }

       await Product.findByIdAndDelete(id);

       res.status(200).json({
        success:true,
        message:"product deleted successfully"
       })


    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

module.exports = { getAllProducts,getProduct,createProduct,updateProduct,deleteProduct}