const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            required: [true, "Name is required"],
        },

        email: {
            type: String,
            required: [true, "Please add the contact email address"],
        },

        phone: {
            type: String,
            required: [true, "Please add the contact phone number"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);
