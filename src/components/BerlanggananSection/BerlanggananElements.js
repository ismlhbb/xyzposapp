import styled from 'styled-components'

export const BerlanggananContainer = styled.div`
  margin: 0 auto;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  min-height: 700px;
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 100%;
  }
`

export const Heading = styled.h3`
  padding-top: 25px;
  font-size: 2.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`

export const BerlanggananWrapper = styled.div`
  margin: 0 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const BerlanggananCard = styled.div`
  background: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  height: 430px;
  text-decoration: none;
  border-radius: 30px;
  width: 350px;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  color: #000;

  &:nth-child(2) {
    height: 480px;
    
    @media screen and (max-width: 768px) {
      width: 400px;
    }
  }
`

export const BerlanggananType = styled.h1`
  color: #EB414F;
  margin-bottom: 5px;
  font-size: 2rem;
  font-weight: 800;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const BerlanggananPriceWrapper = styled.div`
  height: 53px;
  margin-bottom: 5px;
`

export const PriceNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const PriceSign = styled.h1`
  font-size: 1.4rem;
  font-weight: 400;
  color: #000;
`

export const BerlanggananPriceNumber = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  color: #000;
`
export const BerlanggananPriceEnd = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
`

export const BerlanggananList = styled.div`
  margin: 10px 0 25px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 5px auto;
`

export const BerlanggananH3 = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  color: #000;
`

export const BestSeller = styled.h1`
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
  background: #EB414F;
  width: 350px;
  padding: 15px 0;
  margin-top: -24px;
  margin-bottom: 10px;
  text-align: center;
  border-top: 2px solid #EB414F;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
  
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 48px;
  margin-bottom: 10px;
`

export const BerlanggananIcon = styled.img`
  width: 10%;
  margin-right: 10px;
  padding-right: 0;
`

