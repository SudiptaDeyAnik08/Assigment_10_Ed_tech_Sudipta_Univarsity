import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

function Main() {
  return (
    <div>
        <NavBar></NavBar>
         <Outlet></Outlet>
    </div>
  )
}

export default Main