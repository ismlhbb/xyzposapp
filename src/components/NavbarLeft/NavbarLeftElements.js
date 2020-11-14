import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

export const NavbarLeftContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #eaeaea;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '95%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #EB414F;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const NavbarLeftWrapper = styled.div`
  color: #fff;
  
`;

export const NavbarLeftMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 70px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(2, 50px);
  }
`;

export const NavbarLeftLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: black;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: #EB414F;
    transition: 0.2s ease-in-out;
  }
`;

export const NavLeftBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const NavbarLeftRoute = styled(LinkRouter)`
  border-radius: 37px;
  background: transparent;
  white-space: nowrap;
  padding: 15px 60px;
  color: #EB414F;
  border: 3px solid #EB414F;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #EB414F;
    color: white;
  }
`;