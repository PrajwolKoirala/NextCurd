"use client"

import React from 'react'

import { signIn } from 'next-auth/react';

import { FcGoogle } from 'react-icons/fc'

import { FaGithub } from 'react-icons/fa';

import {Button} from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

const Social = () => {

  const onClick = (provider: "Google" | "Github") => {
    signIn(provider, { 
       callbackUrl:DEFAULT_LOGIN_REDIRECT,
     });
  }


  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
      className='w-full'
      size="lg"
      onClick={() => onClick("Google")}
      >
        <FcGoogle className='h-5 w-5'/>
      </Button>

      <Button
      className='w-full'
      size="lg"
      onClick={() => onClick("Github")}
      >
        <FaGithub className='h-5 w-5'/>
      </Button>
    </div>
  )
}

export default Social;


// import React from 'react';
// import { signIn } from '@/auth'; // Adjust the import path as needed
// import { FcGoogle } from 'react-icons/fc';
// import { FaGithub } from 'react-icons/fa';
// import { Button } from '@/components/ui/button'; // Adjust the import path as needed
// import { DEFAULT_LOGIN_REDIRECT } from '@/routes'; // Adjust the import path as needed

// const Social = () => {
//   const onClick = (provider: "google" | "github") => {
//     signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
//   };

//   return (
//     <div className='flex items-center w-full gap-x-2'>
//       <Button
//         className='w-full'
//         size='lg'
//         onClick={() => onClick("google")}
//       >
//         <FcGoogle className='h-5 w-5'/>
//       </Button>

//       <Button
//         className='w-full'
//         size='lg'
//         onClick={() => onClick("github")}
//       >
//         <FaGithub className='h-5 w-5'/>
//       </Button>
//     </div>
//   );
// };

// export default Social;
