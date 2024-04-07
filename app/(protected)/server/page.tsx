import React from 'react'

import {Userinfo} from "../../../components/userInfo"
import {auth} from "../../../auth"
import { currentUser } from '../../../lib/auth'

const ServerPage = async () => {
    const user = await currentUser();
  return (
    <div>
      <Userinfo 
        label='Server Component'
        user={user}
      />
    </div>
  )
}

export default ServerPage
