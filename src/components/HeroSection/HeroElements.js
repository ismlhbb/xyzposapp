import styled from 'styled-components'

export const HeroContainer = styled.div`
  color: #fff;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const HeroWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  margin-top: -100px;
  justify-content: center;
`

export const HeroRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2"
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 60px;
  padding-bottom: 60px;
`

export const Heading = styled.h1`
  margin-bottom: 55px;
  font-size: 48px;
  font-weight: 600;
  color: #000;
  line-height: 1.3;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 53px;
  margin-bottom: 20px;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`