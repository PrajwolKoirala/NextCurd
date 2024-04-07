"use client"

import React from 'react'

import {Userinfo} from "../../../components/userInfo"

import { useCurrentUser } from '../../../hooks/useCurrentUser'

const ClientPage =  () => {
    const user = useCurrentUser();
  return (
    <div>
      <Userinfo 
        label='Client Component'
        user={user}
      />
    </div>
  )
}

export default ClientPage
