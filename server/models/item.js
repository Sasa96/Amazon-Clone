var mongoose = require("mongoose");

var ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },

    available: {
        type: Boolean,
        required: true
    }
});

var Item = mongoose.model("Item", ItemSchema);

module.exports = { Item };
