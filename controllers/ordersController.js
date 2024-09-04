const User = require("../models/user");

//ดึงข้อมูล
exports.getOeders = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getOeders1One = async (req, res) => {
    const { customer_name } = req.params;
    try {
        const user = await User.findOne({ customer_name });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//เพิ่มข้อมูล
exports.createOeders = async (req, res) => {
    const { customer_name, product, quantity, order_date, status } = req.body;
    try {
        const newUser = new User({ customer_name, product, quantity, order_date, status });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//อัปเดตข้อมูล
exports.updeteOeders = async (req, res) => {
    const { id } = req.params;
    const { customer_name, product, quantity, order_date, status } = req.body;
    try {
        const updeteOeders = await User.findByIdAndUpdate(
            id,
            { customer_name, product, quantity, order_date, status },
            { new: true, runValidators: true }
        );
        await newUser.save();
        res.status(201).json(updeteOeders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//ลบข้อมูล
exports.deleteOeders = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteOeders = await User.findByIdAndDelete(id);

        if (!deleteOeders) {
            res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product delete successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};