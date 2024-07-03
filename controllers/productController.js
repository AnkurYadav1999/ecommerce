const getAllProducts = async (req,res) => {
    res.status(200).json({
        message:"Get all Products"
    })
} 

module.exports = {getAllProducts}