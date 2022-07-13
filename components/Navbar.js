import React from "react"
import { useRecoilValue } from "recoil"
import { navbarState } from "../atoms"

const Navbar = () => {
  const navbarStateValue = useRecoilValue(navbarState)

  return (
    <div className={navbarStateValue && "navbar"}>
      {navbarStateValue && (
        <ul className='navbar-links'>
          <li>Home</li>
          <li>Company</li>
          <li>Boundary Surveys</li>
          <li>Survey Request</li>
        </ul>
      )}
    </div>
  )
}

export default Navbar
