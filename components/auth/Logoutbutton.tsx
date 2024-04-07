"use client"

import { signOut } from "next-auth/react"
import React from "react"
interface Logoutbuttonprops {
    children?: React.ReactNode,

};

export const LogoutButton = ({
    children
}: Logoutbuttonprops) => {
    const onClick = () =>{
        signOut();
    }

    return (
        <span onClick = {onClick} className="cursor-pointer">
            {children}
        </span>
    )
}