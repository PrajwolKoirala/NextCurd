"use server";


import bcrypt from "bcryptjs";
import * as z from "zod"
import { RegisterSchema } from "../../schemas";
import { db } from "@/lib/db";
import { getUserByemail } from "@/data/user";

export const register = async (values : z.infer<typeof RegisterSchema>) => {

    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return{error:"invalid fields"};
        }


        const {name, email, password } = validatedFields.data
        const hashedPassword = await bcrypt.hash(password,10)
    
        const exsistingUser = await getUserByemail(email)

        if(exsistingUser) {
            return{error : "email already in use"}
        }
    
        await db.user.create({
            data:{
                name,
                email,
                password: hashedPassword,
            }
        });


        //TODO send verification to the user

        return {success: "user created"};


};