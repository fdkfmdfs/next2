'use client'
import {signOut} from 'next-auth/react'

const LogOutBtn = () => {
  return (
    <span className='LogOutBtn' onClick={()=>{signOut()}}>
      LogOut
    </span>
  )
}

export default LogOutBtn