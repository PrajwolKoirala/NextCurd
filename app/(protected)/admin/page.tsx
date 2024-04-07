// // "use client"
// // import React from 'react'
// // import { useCurrentRole } from '../../../hooks/useCurrentRole'
// // import {currentRole} from "../../../lib/auth"
// // import { Card, CardContent, CardHeader } from '../../../components/ui/card'
// // import { RoleGate } from '../../../components/auth/rolegate'
// // import FormSuccess from "../../../components/FormSuccess"
// // import { UserRole } from '@prisma/client'
// // import { Button } from '../../../components/ui/button'
// // const AdminPag = async () => {
// //     const onApiRouteClick = () =>{
// //         fetch("/api/admin")
// //         .then((response) => {
// //             if (response.ok) {
// //                 console.log("okkkkk");
                
// //             }else{
// //                 console.error("Forbidden")
// //             }
// //         })
// //     }

// //     const role = await currentRole()
// //   return (
// //     <Card className='w-[600px] '>
// //      <CardHeader>
// //         <p className='text-2xl font-semibold text-center'>
// //             ADMIN
// //         </p>
// //      </CardHeader>
// //      <CardContent className='space-y-4'>
// //         <RoleGate allowedRole={UserRole.ADMIN}>
// //             <FormSuccess message="YOU ARE ALLOWED TO SEE THIS PAGE"/>
// //         </RoleGate>
// //      </CardContent>
// //      <div className='flex flex-row items-center justify-between rounded-lg borer p-3 shadow-md'>
// //         <p>
// //             Admin-Only Api Route
// //         </p>
// //         <Button >
// //             Click to test
// //         </Button>
// //      </div>
// //      <div className='flex flex-row items-center justify-between rounded-lg borer p-3 shadow-md'>
// //         <p>
// //             Admin-Only Server Route
// //         </p>
// //         <Button onClick={onApiRouteClick}>
// //             Click to test
// //         </Button>
// //      </div>
// //     </Card>
// //   )
// // }

// // export default AdminPag


"use client"
import React, { useEffect } from 'react';
import { useCurrentRole } from '../../../hooks/useCurrentRole';
import { currentRole } from '../../../lib/auth';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { RoleGate } from '../../../components/auth/rolegate';
import FormSuccess from '../../../components/FormSuccess';
import { UserRole } from '@prisma/client';
import { Button } from '../../../components/ui/button';
import {toast} from "sonner"

const AdminPag = () => {
  // Define onApiRouteClick function
  const onApiRouteClick = async () => {
    try {
      const response = await fetch("/api/admin");
      if (response.ok) {
       toast.success("allowed API route")
      } else {
        toast.error("Forbidden");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Call onApiRouteClick function once when the component mounts
  useEffect(() => {
    onApiRouteClick();
  }, [0]);

  const role = useCurrentRole(); // Assuming useCurrentRole is a custom hook returning the current role

  return (
    <Card className='w-[600px] '>
      <CardHeader>
        <p className='text-2xl font-semibold text-center'>ADMIN</p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="YOU ARE ALLOWED TO SEE THIS PAGE" />
        </RoleGate>
      </CardContent>
      <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
        <p>Admin-Only Api Route</p>
        <Button onClick={onApiRouteClick}>Click to test</Button>
      </div>
      <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
        <p>Admin-Only Server Route</p>
        <Button onClick={onApiRouteClick}>Click to test</Button>
      </div>
    </Card>
  );
};

export default AdminPag;
