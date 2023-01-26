import { fetchAllUserDetails,fetchUserById,fetchAllPostDetail,insertDetailPost,insertUserDetails, fetchPostDetailById } from "../services/Services.js";

export async function fetchAllUserController(req,res){
    try{
        const details = await  fetchAllUserDetails(req,res);
        return res.status(200).json(details);
    }
    catch (err){
        return res.status(500).send("error fetching the details");

    }
}

export async function fetchItemByIdUserController(req,res){
    const id = req.params.id;
    try{
        const detail = await  fetchUserById(id);
        return res.status(200).json(detail);
    }
    catch (err){
        return res.status(500).send("ID  getting error check once code");

    }
}

export async function insertItemUserController(req,res){
    const data = req.body;
    try{
        const detail = await insertUserDetails(data)
        return res.status(200).json(detail);
    }
    catch (err){
        return res.status(500).send("insert the details get error");

    }
}

export async function fetchAllPostController(req,res){
    try{
        const Details = await  fetchAllPostDetail(req,res);
        return res.status(200).json(Details);
    }
    catch (err){
        return res.status(500).send("error fetching the details");

    }
}
export async function fetchItemByIdPostController(req,res){
    const id = req.params.interestTag;
    try{
        const detail = await  fetchPostDetailById(id);
        return res.status(200).json(detail);
    }
    catch (err){
        return res.status(500).send("ID  getting error check once code");

    }
}

export async function insertItemPostController(req,res){
    const data1 = req.body;
    try{
        const detail2 = await insertDetailPost(data1)
        return res.status(200).json(detail2);
    }
    catch (err){
        return res.status(500).send("ID  getting error check once code");

    }
}