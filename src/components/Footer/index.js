import React from 'react'
import {FooterContainer, FooterWrap, FooterText} from './FooterElement'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterText>
          &copy; PT XYZ INDONESIA <FooterText style={{ fontWeight: '400' }}>2020</FooterText>
        </FooterText>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
