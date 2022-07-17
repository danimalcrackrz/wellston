import React from "react"
import Image from "next/image"
import mainImg from "../public/scott-blake-fence.jpg"
import logo from "../public/logoAsset 4.png"

const Main = () => {
  const imgStyle = {
    filter: "grayscale(50%)  brightness(50%)",
  }
  return (
    <div className='main'>
      <Image
        src={mainImg}
        layout='fill'
        alt='land surveyor standing near a barb wired fence'
        style={imgStyle}
        objectFit='cover'
      />
      <div className='main-title'>
        <Image
          src={logo}
          alt='wellston and associates logo'
          layout='responsive'
          width={603}
          height={126}
        />
      </div>
    </div>
  )
}

export default Main
