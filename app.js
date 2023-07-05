const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog
} = require('./controllers/BlogControllers')


dotenv.config()

app.use(express.json()); //used to enable the built-in JSON body parsing middleware provided by Express.



mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected To Database");
    })
    .catch((err) => {
        console.log(err);
        console.log("Couldn't connect");
    })

const router = express.Router()
router.route("/").get(getAllBlogs)
router.route("/").post(createBlog);
router.route("/:id").get(getBlogById)
router.route("/:id").put(updateBlog)
router.route("/:id").delete(deleteBlog);

app.listen(3001,() => {
    console.log("server Initiated")
})

module.exports = app;