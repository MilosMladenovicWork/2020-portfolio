import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import Nav from '../components/nav'
import menuImg from '../images/menu.svg'
import './header.css'

const Header = ({ siteTitle }) => {

  const [clicked, setClicked] = useState(false)
  
  return(
    <header>
      <h1>LOGO</h1>
      <Nav open={clicked} setOpen={setClicked}/>
      <img id='menu' src={menuImg} onClick={() => setClicked((prevState) => !prevState)}/>
    </header>
  )
}

export default Header
