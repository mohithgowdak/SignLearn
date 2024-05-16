import React from 'react'
import "./Header.css"
import SignHand from "../../assests/SignHand.png";

const Header = () => {
  return (
    <div className="signlang__header section__padding gradient__bg" id="home">

    <div className="signlang__header-content">
      <h1 className="gradient__text">Increase your Cognitive Brain Power with SLR.</h1>
      <p>
      Learning sign language is beneficial for staying active as you get older and improving your cognitive abilities. It also enables communication with 72 million sign language speakers worldwide. Try out our tool to learn and practice sign language, and enjoy the experience!
      </p>

    </div>
    <div className="signlang__header-image">
      <img src={SignHand} alt='SIGN-HAND'/>
    </div>
  </div>
  )
}

export default Header