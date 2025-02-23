const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URI, {}).then(() => {
    console.log("MONGO DB connected");
}).catch((err) => {
    console.log(err);
});

const ordersRoute = require("./router/Orders");
app.use("/api/orders", ordersRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));