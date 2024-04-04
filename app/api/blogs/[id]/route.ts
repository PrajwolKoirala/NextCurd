import { NextResponse } from "next/server";
import { getById, updatePost, deletePost } from "@/lib/data";



export const GET = async (req:Request) =>{
    console.log("get");

    try{
        const id = req.url.split("blogs/")[1];
        const post = getById(id);
        if(!post){
            return NextResponse.json({message:"error"},{status: 404});
    
        }
        return NextResponse.json({message:"ok",post},{status: 200});
    }catch(err){
        return NextResponse.json({message:"error",err},{status: 500});
    }
    

}
export const PUT = async (req:Request) =>{
    console.log("PUT");
    try{
        const {title, desc} = await req.json();
        const id = req.url.split("blogs/")[1];
        updatePost(id, title, desc);
        return NextResponse.json({message : "ok"}, {status:200})
    }catch(err){
        console.log(err);
        
        return NextResponse.json({message:"error",err},{status: 500});

    }
    
}

export const DELETE = async (req:Request) =>{
    console.log("DELETE");
    try{
        const id = req.url.split("blogs/")[1];
        deletePost(id);
        return NextResponse.json({message : "ok"}, {status:200})
    }catch(err){
        return NextResponse.json({message:"error",err},{status: 500});

    }
    
}