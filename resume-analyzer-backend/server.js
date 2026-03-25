const express = require('express');
const cors = require('cors');
const resumeRoute = require('./routes/resume');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/resume', resumeRoute);


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})