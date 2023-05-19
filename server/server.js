const express = require('express')
const app = express();
const mongoose = require('mongoose');

const connectParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

const url = "mongodb+srv://root:abcd1234@demo.vojbrj9.mongodb.net/?retryWrites=true&w=majority";

 const connection = mongoose.connect(url, connectParams)
                        .then(()=> console.log('Connected'))
                        .catch((err)=> console.log(err));

console.log("app listening on port 3000")