const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDB = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();

connectDB()
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));

app.use(errorHandler)

app.listen(port, () => {
    console.log('server running on port 5k');
})