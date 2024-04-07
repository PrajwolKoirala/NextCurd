"use client"

import { UserRole } from "@prisma/client"
import { useCurrentRole } from "../../hooks/useCurrentRole";
import FormError from "../FormError"
import React from "react";
interface RoleGateProps {
    children: React.ReactNode;
    allowedRole:UserRole
};

export const RoleGate = ({
    children,
    allowedRole,
}:RoleGateProps) =>{
    const role =  useCurrentRole();

    if (role !== allowedRole) {
        return (
            <FormError message="YOU DO NOT HAVE A PERMISSION TO VIEW THIS PAGE!!"/>
        )
    }

    return (
        <>
            {children}
        </>
    )


}