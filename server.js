const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models');
const Product = mongoose.model("Product");

// Primeira rota
app.get('/',(req,res)=>{
    Product.create({
        title: "react-native",
        description: "Build native apps with React",
        url: "http://github.com/facebook/react-native",
    });


    res.send('Hello Rocketseat!');
});

app.listen(3001);