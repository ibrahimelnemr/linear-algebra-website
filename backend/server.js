const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

async function connect() {
    try {
        await mongoose.connect(uri);

        console.log("Connected to MongoDB");

        const connection = mongoose.connection;
        
        console.log(connection.readyState);
        
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });

    }
    catch (error) 
    {
        console.log(error);
    }
}

connect();


setTimeout(() => {
    
    const connection = mongoose.connection;
    
    console.log(connection.readyState);

}, 4000)