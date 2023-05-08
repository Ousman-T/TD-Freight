require('dotenv').config();
require('./config/database'); //database connection
const express = require('express');
const path = require('path'); //node_mods
const app = express();

// * Development Port 3001, Front end Port 3000
const PORT = process.env.PORT || 3001;

// * Config / Middleware logger
// JSON payload middleware (for data coming from frontend functions)
app.use(express.json());












app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})