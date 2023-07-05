const BlogService = require('../services/blogService');

exports.getAllBlogs = async(req,res) => {
    try {
        const blogs = await BlogService.getAllBlogs();
        res.status(200).json({
            data : blogs ,
            result : "Success"
        })
    }catch(err){
        res.status(500).json({
            error : err.message
        })
    }
}

exports.createBlog = async(req,res) => {
    try{
        const blog = await BlogService.createBlog(req.body)
        res.status(200).json({
            data : blog,
            result : "Successfully Created"
        })
    }catch (err){
        res.status(500).json({
            error : err.message
        })
    }
}

exports.getBlogById = async (req,res) => {
    try{
        const blog = await BlogService.getBlogById(req.params.id);
        res.status(200).json({
            data : blog,
            result : "success"
        })
    }catch(err){
        res.stats(404).json({
            error : err.message
        })
    }
}

exports.updateBlog = async (req,res) => {
    try{
        const blog = await BlogService.updateBlog(req.params.id,req.body)
        res.status(200).json({
            data : blog,
            result : "Successfully Updated"
        })
    }catch (err){
        res.status(500).json({
            error : err.message
        })
    }
}

exports.deleteBlog = async (req,res) => {
    try{
        const blog = await BlogService.deleteBlog(req.params.id)
        res.status(200).json({
            data : blog,
            result : "Successfully Deleted"
        })
    }catch (err){
        res.status(500).json({
            error : err.message
        })
    }
}
