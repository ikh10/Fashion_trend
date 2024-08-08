const express = require("express");
const dotenv = require("dotenv");dotenv.config();
const colors = require("colors");
const morgan = require("morgan");
const rootroute = require("./routes/rootroute");
const productroute = require("./routes/productroute");
const connectDB = require("./config/db");

// const PORT = process.env.PORT || 6000 || 8080;
const PORT = 8000;
const app = express();
connectDB();

app.get("/",rootroute);

// app.get("/", (req,res) => {
//     res.send("api is working");
// });

app.use('/FashionTrends',productroute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.black);
})