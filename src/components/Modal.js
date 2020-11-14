import React from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import LoginImg from '../assets/login-illustration.svg';
import {ButtonPrimary} from './ButtonElements'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 5px 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 999999;
  border-radius: 10px;
`

const ModalImg = styled.img`
  width: 90%;
  height: 90%;
  margin-left: 50px;
  border-radius: 10px 0 0 10px;
  background: #fff;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  line-height: 1.8;
  margin-left: 20px;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #000;
    border: none;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 19;
`

const NameInput = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: #EB414F;
  font-size: 1em;
  border: 2px solid #EB414F;
  border-radius: 40px;
  height: 50px;
  font-weight: 800;
  width: 310px;
  margin-bottom: 20px;
  padding: ${props => props.size};
`;

const EmailInput = styled.input.attrs(props => ({
  type: "email",
  size: props.size || "1em",
}))`
  color: #EB414F;
  font-size: 1em;
  border: 2px solid #EB414F;
  border-radius: 40px;
  height: 50px;
  font-weight: 800;
  width: 310px;
  margin-bottom: 20px;
  padding: ${props => props.size};
`;

const PasswordInput = styled.input.attrs(props => ({
  type: "password",
  size: props.size || "1em",
}))`
  color: #EB414F;
  font-size: 1em;
  border: 2px solid #EB414F;
  border-radius: 40px;
  height: 50px;
  font-weight: 800;
  width: 310px;
  margin-bottom: 20px;
  padding: ${props => props.size};
`;

const RememberMe = styled.input.attrs(props => ({
  type: "checkbox"
}))`
  margin-right: 10px;
  margin-bottom: 40px;
  padding: ${props => props.size};
`;

export const ModalSignIn = ({showModalSignIn, setShowModalSignIn}) => {
  return ( 
    <>
      {showModalSignIn ? (
        <Background>
          <ModalWrapper showModalSignIn={showModalSignIn}>
            <ModalImg src={LoginImg} alt='login' />
            <ModalContent>
              <h1>Masuk</h1>
              <EmailInput placeholder='Email' size="1em"/>
              <PasswordInput placeholder='Password' size="1em"/>
              <div>
                <RememberMe/>
                <label style={{fontSize: '20px'}}>Ingat Saya</label>
              </div>
              <ButtonPrimary>Masuk</ButtonPrimary>
              <div>
                <h4>Belum punya Akun? Daftar</h4>
              </div>
            </ModalContent>
            <CloseModalButton aria-label='Close modal' onClick={() => setShowModalSignIn (prev => !prev)} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  )
}

export const ModalSignUp = ({showModalSignUp, setShowModalSignUp}) => {
  return ( 
    <>
      {showModalSignUp ? (
        <Background>
          <ModalWrapper showModalSignUp={showModalSignUp} >
            <ModalImg src={LoginImg} alt='login' />
            <ModalContent>
              <h2>Daftar</h2>
              <NameInput placeholder='Nama' size="1em"/>
              <EmailInput placeholder='Email' size="1em"/>
              <PasswordInput placeholder='Password' size="1em"/>
              <ButtonPrimary>Daftar</ButtonPrimary>
              <div>
                <h4>Sudah punya akun? Masuk</h4>
              </div>
            </ModalContent>
            <CloseModalButton aria-label='Close modal' onClick={() => setShowModalSignUp (prev => !prev)} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  )
}