var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionSchema = new Schema({
    date:Date,
    amount:Number,
    category:String,
    note:String
})

var transaction = mongoose.model('transaction',transactionSchema);

module.exports = transaction;
