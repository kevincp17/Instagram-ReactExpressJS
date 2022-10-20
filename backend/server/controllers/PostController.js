import { sequelize } from "../models/init-models"
const findAll=async (req,res)=>{
    try{
        const post=await req.context.models.posts.findAll()
        return res.send(post)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findOne=async (req,res)=>{
    try{
        const post=await req.context.models.posts.findOne({
            where:{post_id:req.params.id}
        })
        return res.send(post)
    }catch(error){
        return res.status(404).send(error)
    }
}

const create=async (req,res)=>{
    try{
        const post=await req.context.models.posts.create({
            timestamp:Date.now(),
            content:req.body.content,
            post_user_id:req.body.content
        })
        return res.send(post)
    }catch(error){
        return res.status(404).send(error)
    }
}

const update=async (req,res)=>{
    try{
        const post=await req.context.models.posts.update({
            timestamp:Date.now(),
            content:req.body.content,
        },{returning :true,where:{post_id: req.params.id}})
        return res.send(post)
    }catch(error){
        return res.status(404).send(error)
    }
}

const deleted=async (req,res)=>{
    try{
        const post=await req.context.models.posts.destroy({
            where:{post_id: req.params.id}
        })
        return res.send('delete '+post+' rows')
    }catch(error){
        return res.status(404).send(error)
    }
}

export default{
    findAll,
    findOne,
    create,
    update,
    deleted
}