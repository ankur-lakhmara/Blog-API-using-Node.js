const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})