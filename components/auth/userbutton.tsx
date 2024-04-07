"use client"
import React from "react"
import { DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
 } from "../ui/dropdown-menu"

 import {FaUser} from "react-icons/fa"

 import { ExitIcon } from "@radix-ui/react-icons"

 import {Avatar,
    AvatarFallback,
    AvatarImage
 } from "../ui/avatar"

 import { useCurrentUser } from "../../hooks/useCurrentUser"
import { LogoutButton } from "./Logoutbutton"

 export const UserButton = () =>{

    const user = useCurrentUser();

    return (
        <div>
           <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={user?.image || ""} />
                    <AvatarFallback className="bg-green-300">
                        <FaUser className="text-whites"/>
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <LogoutButton>
                        <DropdownMenuItem>
                            <ExitIcon className="h-4 w-4 mr-2"/>
                            Logout
                        </DropdownMenuItem>
                    </LogoutButton>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
 }