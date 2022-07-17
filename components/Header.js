import React from "react"
import Image from "next/image"
import { useRecoilState } from "recoil"
import { navbarState } from "../atoms"
import { Twirl as Hamburger } from "hamburger-react"
import logo from "../public/logoAsset 4.png"

const Header = () => {
  const [navbarStateValue, setNavbarState] = useRecoilState(navbarState)
  return (
    <div className='header'>
      <span className='header-logo'>
        <Image src={logo} alt='logo' width={300} height={50} />
      </span>
      <Hamburger
        size={35}
        direction='left'
        duration={0.4}
        rounded
        toggled={navbarStateValue}
        toggle={setNavbarState}
        color={navbarStateValue ? "#fcb034" : "white"}
      />
    </div>
  )
}

export default Header
