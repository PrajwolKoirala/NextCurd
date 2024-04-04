"use client"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { useEffect } from "react";
import { LoginButton } from "@/components/auth/LoginButton";
export default function Home() {


  return (
    

    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
    <h1 className="text-6xl text-black">
      AUTH
    </h1>
    <p className="text-white">
      A simple authentication project
    </p>
    <LoginButton mode ="modal">

<Button variant="secondary" className=""> Sign in</Button>
    </LoginButton>
      </div>

   
    
    </main>
  );
}
