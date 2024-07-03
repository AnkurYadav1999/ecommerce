const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    public_id:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
})


const productSchema = new Schema({
    name:{
        type:String,
        required:[true,"Product name is required"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Product Description is required"]
    },
    price:{
        type:Number,
        required:[true,"Price should be present"],
        max:[100000,"Price cannot be greater then 100k"],
        min:[1,"Price cannot be less then 1"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:{
        type:[imageSchema],
        validate:{
            validator:function(images){
                return images.length >=3 && images.length<=5;
            },
            message:"There should be atleast 3 images and atmost 5 images"
        }
    },
    category:{
        type:String,
        required:[true,"Please enter product category"],
        enum:['Electronics','Clothings','Fitness','Mobiles','Decor']
    },
    stock:{
        type:Number,
        required:[true,"Please enter product stock"],
        max:[1000,"Stock cannot be greater then 1000"],
        default:1
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ]
},{timestamps:true})

const Product = mongoose.model("Product",productSchema)

module.exports = Product