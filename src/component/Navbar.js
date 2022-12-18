import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      NAvBAr 
    <NavLink to="/update/:id">Edit</NavLink>
    </div>
  )
}

export default Navbar
