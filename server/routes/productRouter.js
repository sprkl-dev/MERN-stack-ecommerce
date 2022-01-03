const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Product = require('../models/productModel');
const data = require('../seeds/seed');
const productRouter = express.Router();
const axios = require('axios')


//https://www.npmjs.com/package/express-async-handler/v/1.1.4
// if error, it will be passed to error handler defined in server.js 
productRouter.get(
    '/seed', 
    expressAsyncHandler(async (req, res) => {
    // remove data before inserting. it will remove all data... be cautious to use it 
        // await Product.deleteMany({});
        const createdProducts = await Product.insertMany(data.products);
        res.send( { createdProducts });
    })
);



let injected = false;

async function seed() {
    console.log("Seeding injected = " + injected)
    if (!injected) {
        try {
            await Product.insertMany(data.products);
        } catch (e) {
            e;
        }
        injected = true;
    }
    
}



// get all products /api/products/
productRouter.get('/', expressAsyncHandler(async (req, res) => {
    console.log("Production router get /")
    await seed();
    console.log("Production router seeding")
    const products = await Product.find({});
    console.log("Production router found products")
    res.send( products );

}));

// temp product api/product route 
productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    console.log("Production router get id")
    const product = await Product.findById(req.params.id);
    //check condition
    if(product) {
        console.log("Production router found product")
        res.send(product);
    } else {
        console.log("Production product not found")
        res.status(404).send({ message: 'Product Not Found'});
    }
})
);


module.exports = productRouter;