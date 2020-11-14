import React, {useState} from 'react';
import {HeroContainer, HeroWrapper, HeroRow, Column1, Column2, TextWrapper, Heading, BtnWrap, ImgWrap, Img} from './HeroElements';
import {ButtonPrimary, ButtonOutline} from '../ButtonElements';
import HeroImg from '../../assets/hero-section-illustration.svg';
import { ModalSignUp } from '../Modal';

const HeroSection = () => {
  // Toggle Modal SignUp
  const [showModalSignUp, setShowModalSignUp] = useState(false);
  const openModalSignUp = () => {
    setShowModalSignUp(prev=> !prev);
  };
  
  return (
    <>
      <ModalSignUp showModalSignUp={showModalSignUp} setShowModalSignUp={setShowModalSignUp}/>
      <HeroContainer id='home' >
        <HeroWrapper>
          <HeroRow>
            <Column1>
              <TextWrapper>
                <Heading>Solusi terbaik untuk <Heading style={{ color: '#EB414F', marginBottom: 0 }}>mengelola usaha</Heading> kamu!</Heading>
                <BtnWrap>
                  <ButtonPrimary onClick={openModalSignUp}>Daftar Sekarang</ButtonPrimary>
                </BtnWrap>
                <BtnWrap>
                  <ButtonOutline to="subscribe"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-100}
                  >
                      Pelajari Dulu!
                  </ButtonOutline>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={HeroImg} />
              </ImgWrap>
            </Column2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  )
}

export default HeroSection;
