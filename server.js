const app = require('./app')
const dotenv = require('dotenv')
const dbConnect = require('./config/db')

//dotenv config
dotenv.config({path:"config/.env"})

const PORT = process.env.PORT 

//db connection
dbConnect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running at port http://localhost:${PORT}`)
    })
}).catch((err)=>{
    console.log(err.message)
})

