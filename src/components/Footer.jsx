import React from 'react'
import styled from 'styled-components'
import {Facebook,Instagram,Youtube,Linkedin} from 'react-feather'
const Footer = () => {
  return (
    <Container>

      <img src="final_ceson_logo.png"  />
      <p> &copy;2024 Celestial Software and Networks</p>
      <div className='icons'>
    <Facebook></Facebook>
    <Instagram></Instagram>
    <Youtube></Youtube>
   <Linkedin></Linkedin>
      </div>
    </Container>
  )
}

export default Footer
  const Container = styled.div`
    height:150px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:350px;
  padding:0px 50px;
  background:#0C0C0C;
  color:white;
  font-size:18px;

    img{
      height:80px;
      width:80px;
      object-fit:contain;
      margin-right:20px;
    }
    .icons{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:30px;
    }

  `