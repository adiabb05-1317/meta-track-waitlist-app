const express = require('express');
const cors = require('cors');
require("dotenv").config();
const db=require("./db");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use('/metapher/public',require('./Routes/waitlistRoutes'));