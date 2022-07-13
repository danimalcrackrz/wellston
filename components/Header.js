import React from "react"
import { useRecoilState } from "recoil"
import { navbarState } from "../atoms"
import { Twirl as Hamburger } from "hamburger-react"

const Header = () => {
  const [navbarStateValue, setNavbarState] = useRecoilState(navbarState)
  return (
    <div className='header'>
      <Hamburger
        size={35}
        direction='left'
        duration={0.4}
        rounded
        toggled={navbarStateValue}
        toggle={setNavbarState}
        color={navbarStateValue ? "aqua" : "white"}
      />
    </div>
  )
}

export default Header
