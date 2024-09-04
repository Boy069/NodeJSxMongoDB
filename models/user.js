const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    customer_name: { type: String, require: true},
    product: { type: String, require: true},
    quantity: { type: Number, require: true},
    order_date: { type: String, require: true},
    status: { type: String, require: true},
});

const User = mongoose.model("User",userSchema);
module.exports = User;