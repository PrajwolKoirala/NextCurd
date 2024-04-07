"use client"

import React from 'react'

import { signOut} from 'next-auth/react';
import {useCurrentUser} from "@/hooks/useCurrentUser"

const SettingsPage = () => {
    const user = useCurrentUser();

const onClick = () => {
    signOut()
}
    


  return (
    <div>
        {/* {JSON.stringify(user)} */}

        <div className="bg-white p-8 rounded-xl">

            <button onClick={onClick} type="submit">
                Signout
            </button>
        </div>
        
    </div>
  )
}

export default SettingsPage
