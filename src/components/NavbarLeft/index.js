import React from 'react';
import {NavbarLeftContainer, CloseIcon, Icon, NavbarLeftWrapper, NavbarLeftMenu, NavbarLeftLink, NavLeftBtnWrap, NavbarLeftRoute} from './NavbarLeftElements'
const NavbarLeft = ({isOpen, toggle}) => {
  return (
    <NavbarLeftContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <NavbarLeftWrapper>
        <NavbarLeftMenu>
          <NavbarLeftLink to="!#" onClick={toggle}>
            Fitur
          </NavbarLeftLink>
          <NavbarLeftLink to="subscribe" onClick={toggle}>
            Berlangganan
          </NavbarLeftLink>
          <NavLeftBtnWrap>
            <NavbarLeftRoute to="/signin" >Sign in</NavbarLeftRoute>
          </NavLeftBtnWrap>
        </NavbarLeftMenu>
      </NavbarLeftWrapper>
    </NavbarLeftContainer>
  )
}

export default NavbarLeft;
