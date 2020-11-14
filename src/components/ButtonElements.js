import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const ButtonPrimary = styled(LinkRouter)`
  border-radius: 40px;
  text-decoration:none;
  background: #EB414F;
  white-space: nowrap;
  padding: 14px 48px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-ease-in-out;
  font-weight: 800;
  width: 310px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #EB414F;
    color: white;
  }
`

export const ButtonOutline = styled(LinkScroll)`
  border-radius: 40px;
  background: transparent;
  white-space: nowrap;
  padding: 14px 48px;
  color: #EB414F;
  font-size: 20px;
  outline: none;
  border: 3px solid #EB414F;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 800;
  width: 310px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #EB414F;
    color: white;
  }

`