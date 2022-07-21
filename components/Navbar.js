import React from "react"
import Link from "next/link"
import { GrFacebook } from "react-icons/gr"
import { useRecoilValue } from "recoil"
import { navbarState } from "../atoms"

const Navbar = () => {
  const navbarStateValue = useRecoilValue(navbarState)

  return (
    <div className={navbarStateValue && "navbar"}>
      {navbarStateValue && (
        <ul className='navbar-links'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='Company'>
              <a>Company</a>
            </Link>
          </li>
          <li>
            <Link href='Survey'>
              <a>Survey Types</a>
            </Link>
          </li>
          <li>
            <Link href='/Request'>
              <a>Survey Request</a>
            </Link>
          </li>
        </ul>
      )}
      <div className='navbar-socials'>
        <a
          href='http://facebook.com/wellstonassociateslandsurveyors'
          target='_blank'
          rel='noreferrer'
        >
          <GrFacebook className='facebook-icon' />
        </a>
      </div>
    </div>
  )
}

export default Navbar
