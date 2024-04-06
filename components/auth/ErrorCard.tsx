import {Header} from "./Header"
import BackButton from "./BackButton"
import React from 'react';
import {
    Card,
    CardHeader,
    CardFooter
} from "../ui/card"

export const ErrorCard = () => {
    return(
        
        <Card className="w-[400px] shadow-md">
                <CardHeader>
                    <Header label="oops@ something went wrong"/>
                </CardHeader>
                <CardFooter>
                    <BackButton label="back tp login "
                    href="/auth/login" />
                </CardFooter>
        </Card>

    )
}