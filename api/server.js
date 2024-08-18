//console.log('server')
//console.log('byeee')

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/product")
dotenv.config();
const PORT = process.env.PORT;

const mongoose =require("mongoose")
//connect db
mongoose.connect(process.env.MONGOOSEDB_RUL).then(()=>console.log("db connected")).then((err)=>{
    err;
})

const databaseseeder= require('./databaseseeder')
const userRoute = require("./routes/User");
app.use(express.json())
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");
//database seeder routes
app.use('/api/seed',databaseseeder)
//routes for users
app.use("/api/users", userRoute);
app.use(express.json())
//routes for products
app.use("/api/products", productRoute);

//routes for orders
app.use("/api/orders", orderRoute);


app.listen(PORT|| 9000, () => {
    console.log(`Server listening on port ${PORT}`);
});

//api product test route 
//app.get("/api/products", (req,res) => {
//  res.json(products);  
//});

//app.get("/api/products/:id", (req,res) => {
//    const Product = products.find((Product)=> Product.id == req.params.id);
//    res.json(Product);  
//  });



