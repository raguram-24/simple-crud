const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const blogScheme = new Scheme({
    title : String,
    body : String,
    image : String,
    createdAt : {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model("Blog" , blogScheme)