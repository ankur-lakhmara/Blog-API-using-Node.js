const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    tags:[{
        type:String,
        trim:true
    }],
    publishDate:{
        type:Date,
        default:Date.now,
    },
    updatedDate:{
        type:Date,
        default:Date.now
    },
});

const Article = mongoose.model('Article',articleSchema);
module.exports = Article;