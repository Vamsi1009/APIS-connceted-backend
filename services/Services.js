import { item} from '../models/User.js';
import { item1} from '../models/Post.js';
import mongoose from 'mongoose';

export async function fetchAllUserDetails(){
    const Items = await item.find({ });
    return Items;
}

export async function fetchUserById(id) {
    const Item2 = await item.findById(id);
    return Item2;
}
export async function insertUserDetails(detail) {
    let Item1 =[];
    Item1.push(detail);
    return await item.insertMany(Item1);
}

export async function fetchAllPostDetail(){
    const Posts = await item1.find({});
    return Posts;
}

export async function fetchPostDetailById(id) {
    const Post =await item1.findById(id);
    return Post;
}

export async function insertDetailPost(detailPost) {
    let post1 = [];
    post1.push(detailPost);
    return await item1.insertMany(post1);
} 
