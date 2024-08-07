const mongoose = require("mongoose");
const ProductCollection = require("../../models/ProductSchema");
// const getproductcontroller = ((req,res) => {
//     res.send("get product controller")
// })
const getproductcontroller = async(req,res) => {
    try {
        const {category, name, subcategory} = req.params;
        let products;
        if(category)
        {
            const searchcategory = category.toLowerCase();
            products = await ProductCollection.find({category: {$regex: new RegExp(searchcategory,"i")},});
        }
        else if (name) {
            const searchname = name.toLowerCase();
            products = await ProductCollection.find({
                name: {$regex: new RegExp(searchname, "i")},
            });
        }
        else if (subcategory) {
            const searchsubcategory = subcategory.toLowerCase();
            product = await ProductCollection.find({
                subcategory: {$regex: new RegExp(searchsubcategory,"i")},
            });
        }
        else
        {
        const product = await ProductCollection.find();
        
        console.log(`product fetched successfully `)
        }
        if(products || products.length == 0)
            return res.status(404).send({message: "Product not found"});
        res.status(200).send(products);
    } 
    catch (error) {
        res.status(504).send({
            message: "Error fetching products",
        })
        console.log(`Error Occured :$(error)`);
    }
}
module.exports = getproductcontroller