var express = require('express');
var transactionRouter = express.Router();

var transactionModel = require('../models/transactionModel');

transactionRouter.post('/',(req,res)=>{
    transactionModel.create(req.body)
    .then((data)=>console.log("data stored successfully"))
    .catch((err)=>console.log(err));
    res.send("ok");
})

transactionRouter.put('/',(req,res)=>{
    //console.log(req.body);
    const id = req.body._id;
    const category = req.body.category;
    const date = req.body.date;
    const amount = req.body.amount;
    const note = req.body.note;
    transactionModel.updateOne({"_id":id},{"category":category,"date":date,"amount":amount,"note":note})
    .then((data)=>console.log("data updated successfully"))
    .catch((err)=>console.log(err));
    res.send("ok");
})

transactionRouter.get('/',(req,res)=>{
    transactionModel.find().sort({"date":-1})
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>console.log(err))
})
transactionRouter.delete('/:id',(req,res)=>{
    const id = req.params.id;
   transactionModel.deleteOne({_id:id})
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>console.log(err))
})

module.exports = transactionRouter;