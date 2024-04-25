const express =require ('express');
const router =express.Router();
const post = require('../model/post');

router.use(express.json());


//to add blog

router.post('/addblog',(req,res)=>{
    const blog = req.body;
    console.log(blog)
    try {
        const data = post(blog).save();
        res.status(200).json({message:"blog added",blog})
    } catch (error) {
        console.log(error);
        res.json({message:"unable to add blog"})
    }
})
// to view all blogs
router.get('/viewall',async(req,res)=>{
    try {
        const data = await post.find();
        console.log(data)
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
})

//delete api

router.delete('/remove/:id',async(req,res)=>{
    try {
        const data = await post.findByIdAndDelete(req.params.id)
        res.status(200).send({message:"Blog deleted"})
    } catch (error) {
        res.status(404).send({message:"no blog found"});
    }
})


//update api
router.put('/update/:id',async(req,res)=>{
    try {
        const data = await post.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send({message:"Blog updated"})
    } catch (error) {
        res.status(404).send({message:"no blog found"});

    }
})


module.exports=router;