const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const articleRoutes = require('./routes/articleRoutes')


const app = express();

app.use(bodyparser.json());


const mongoURI = 'mongodb://localhost:27017/blogDB';
mongoose.connect(mongoURI)
.then(()=>console.log('mongoDB connected'))
.catch((err)=>console.log('error in conntecting with mongoDB',err))

app.use('/api/articles', articleRoutes); 

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})