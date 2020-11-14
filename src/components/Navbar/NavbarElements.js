import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

// Navbar
export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#EB414F' : '#fff')} ;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  font-size: 1.3rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and(max-width: 960px) {
    transition: 0.8s all ease;
  }
`

// Navbar Container
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 65px;
z-index: 1;
width: 100%;
max-width: 1200px;
padding: 0 15px;
`

// Navbar Logo
export const NavLogo = styled(LinkRouter)`
  color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
  display: flex;
  justify-self: flex-start;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
  margin-left: 20px;
  &.active {
    color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
  }
`

// Hamburger menu for mobile view
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

// Navbar Menu
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 20px;

  @media screen and (max-width:768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 50px;
`

export const NavLink = styled(LinkScroll)`
  color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  &.active, &:hover {
    border-bottom: ${({scrollNav}) => (scrollNav ? '3px solid #fff' : '3px solid #EB414F')};
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 37px;
  background: transparent ;
  padding: 5px 30px;
  color: ${({scrollNav}) => (scrollNav ? '#fff' : '#EB414F')};
  border: ${({scrollNav}) => (scrollNav ? '3px solid #fff' : '3px solid #EB414F')};
  outline: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 800;
  margin-left: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({scrollNav}) => (scrollNav ? '#fff' : '#EB414F')};
    color: ${({scrollNav}) => (scrollNav ? '#EB414F' : '#fff')};
  }
`