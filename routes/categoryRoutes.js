var express = require('express');
var categoryRouter = express.Router();
var categoryModel = require('../models/categoryModel');


categoryRouter.post('/',(req,res)=>{
    categoryModel.create(req.body)
    .then((data)=>console.log("data stored successfully"))
    .catch((err)=>console.log(err));
    res.send("ok");
})

categoryRouter.put('/',(req,res)=>{
    //console.log(req.body);
    const id = req.body._id;
    const category = req.body.category;
    categoryModel.updateOne({"_id":id},{"category":category})
    .then((data)=>console.log("data updated successfully"))
    .catch((err)=>console.log(err));
    res.send("ok");
})


categoryRouter.get('/',(req,res)=>{
    categoryModel.find()
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>console.log(err))
})
categoryRouter.delete('/:id',(req,res)=>{
    const id = req.params.id;
    categoryModel.deleteOne({_id:id})
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>console.log(err))
})

module.exports = categoryRouter;