import React, {useState} from 'react';
import {BerlanggananContainer, Heading, BerlanggananWrapper, BerlanggananCard, BerlanggananType, BerlanggananPriceNumber, BerlanggananPriceEnd, BerlanggananList, BerlanggananIcon, BerlanggananH3, BtnWrap, BestSeller, ListItem, PriceNumberWrapper, PriceSign} from './BerlanggananElements';
import {ButtonPrimary} from '../ButtonElements';
import IconCheck from '../../assets/check_circle-24px.svg';
import { ModalSignUp } from '../Modal';

const BerlanggananSection = () => {
  // Toggle Modal SignUp
  const [showModalSignUp, setShowModalSignUp] = useState(false);
  const openModalSignUp = () => {
    setShowModalSignUp(prev=> !prev);
  };

  return (
    <>
      <BerlanggananContainer id='subscribe' >
        <Heading>Daftar sekarang dan nikmati fiturnya!</Heading>
        <BerlanggananWrapper>
          <BerlanggananCard>
              <BerlanggananType>Basic</BerlanggananType>
              <PriceNumberWrapper>
              <PriceSign>Rp </PriceSign>
              <BerlanggananPriceNumber>45.000</BerlanggananPriceNumber>
            </PriceNumberWrapper>
              <BerlanggananPriceEnd>/bulan</BerlanggananPriceEnd>
              <BerlanggananList>
                <ListItem>
                  <BerlanggananIcon src={IconCheck}/>
                  <BerlanggananH3>Kelola stok produk dengan mudah</BerlanggananH3>
                </ListItem>
                <ListItem>
                  <BerlanggananIcon src={IconCheck} />
                  <BerlanggananH3>Laporan penjualan</BerlanggananH3>
                </ListItem>
                <ListItem>
                  <BerlanggananIcon src={IconCheck}/>
                  <BerlanggananH3>Jual produk digital</BerlanggananH3>
                </ListItem>
              </BerlanggananList>     
              <BtnWrap>
                <ButtonPrimary onClick={openModalSignUp}>Aku mau!</ButtonPrimary>
              </BtnWrap>
      
          </BerlanggananCard>
          <BerlanggananCard>
            <BestSeller>Best Seller!</BestSeller>
            <BerlanggananType>Premium</BerlanggananType>          
            <PriceNumberWrapper>
              <PriceSign>Rp </PriceSign>
              <BerlanggananPriceNumber>50.000</BerlanggananPriceNumber>
            </PriceNumberWrapper>
            <BerlanggananPriceEnd>/bulan</BerlanggananPriceEnd>
            <BerlanggananList>
              <ListItem>
                <BerlanggananIcon src={IconCheck}/>
                <BerlanggananH3>Semua fitur pada paket Basic</BerlanggananH3>
              </ListItem>
              <ListItem> 
                <BerlanggananIcon src={IconCheck} />
                <BerlanggananH3>Dukungan printer struk</BerlanggananH3>
              </ListItem>
              <ListItem>
                <BerlanggananIcon src={IconCheck}/>
                <BerlanggananH3>Live support 24 jam</BerlanggananH3>
              </ListItem>
            </BerlanggananList>     
            <BtnWrap>
              <ButtonPrimary onClick={openModalSignUp}>Aku mau!</ButtonPrimary>
            </BtnWrap>
          </BerlanggananCard>
          <BerlanggananCard>
            <BerlanggananType>Super POS!</BerlanggananType>          
            <PriceNumberWrapper>
              <PriceSign>Rp </PriceSign>
              <BerlanggananPriceNumber>70.000</BerlanggananPriceNumber>
            </PriceNumberWrapper>
            <BerlanggananPriceEnd>/bulan</BerlanggananPriceEnd>
            <BerlanggananList>
              <ListItem>
                <BerlanggananIcon src={IconCheck}/>
                <BerlanggananH3>Semua fitur pada paket Premium</BerlanggananH3>
              </ListItem>
              <ListItem>
                <BerlanggananIcon src={IconCheck} />
                <BerlanggananH3>Laporan Penjualan</BerlanggananH3>
              </ListItem>
              <ListItem>
                <BerlanggananIcon src={IconCheck}/>
                <BerlanggananH3>Jual produk digital</BerlanggananH3>
              </ListItem>
            </BerlanggananList>     
            <BtnWrap>
              <ButtonPrimary onClick={openModalSignUp}>Aku mau!</ButtonPrimary>
            </BtnWrap>
          </BerlanggananCard>
          <ModalSignUp showModalSignUp={showModalSignUp} setShowModalSignUp={setShowModalSignUp}/>
        </BerlanggananWrapper>
      </BerlanggananContainer>
      </>
  )
}

export default BerlanggananSection;
