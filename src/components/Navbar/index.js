import React, {useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLink, NavItem, MobileIcon, Bars, NavMenu, NavLogo, NavBtn, NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
import { ModalSignIn } from '../Modal';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  // Toggle Modal SignIn
  const [showModalSignIn, setShowModalSignIn] = useState(false);
  const openModalSignIn = () => {
    setShowModalSignIn(prev=> !prev);
  };
  
  const changeNav = ()=> {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <ModalSignIn showModalSignIn={showModalSignIn} setShowModalSignIn={setShowModalSignIn}/>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome} to='/' scrollNav={scrollNav}> 
            <h1>xyz</h1><h1 style={{ fontWeight: '900' }}>POS</h1>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <Bars scrollNav={scrollNav}/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to= '!#' scrollNav={scrollNav}>
                Fitur
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink scrollNav={scrollNav} to= 'subscribe' activeStyle
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-100}
              > 
                Berlangganan
              </NavLink>
            </NavItem>
            <NavBtn>
              <NavBtnLink onClick={openModalSignIn} scrollNav={scrollNav}>
                Masuk
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>      
    </>
  )
}

export default Navbar;
