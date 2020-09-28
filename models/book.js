const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({    
    cover: String,
    title: String,
    discription: String,
});

module.exports = mongoose.model("Book", bookSchema);