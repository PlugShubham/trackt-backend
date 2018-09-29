var express = require('express');
var app = express();
var transactionRouter = require('./routes/transactionRoutes');
var categoryRouter = require('./routes/categoryRoutes');

var cors = require('cors');
var mongoose = require('mongoose');
const MONGO_URI = 'mongodb://plugshubham:shubham_09@ds213053.mlab.com:13053/trackt';
var bodyParser = require('body-parser');
//var graphqlHTTP = require('express-graphql');
//var schema = require('./schema');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(MONGO_URI,{ useNewUrlParser: true })
.then((res)=>console.log('connected successfully'))
.catch((err)=>console.log('failed to connect'+ err))


app.use('/api/transactions',transactionRouter);
app.use('/api/categories',categoryRouter);


/*
var root = {hello : () => {return "My name is Shubham"}}

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))
*/
app.listen(process.env.PORT || 8000,()=>{console.log("listening at port 8000")});

