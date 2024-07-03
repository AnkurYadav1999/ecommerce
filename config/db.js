const mongoose  = require('mongoose')

const dbConnect = async () => {
    try{
       const conn = await mongoose.connect(process.env.DB_URL)
       console.log(`Your database is connected at ${conn.connection.host}`)
    }catch(err){
        console.log(err.message)
    }
}

module.exports = dbConnect