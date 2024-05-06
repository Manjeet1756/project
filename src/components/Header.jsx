import React from 'react'
import styled from 'styled-components'
import{Link} from 'react-router-dom'
import {Search} from 'react-feather'
const Header = () => {


  return (
    <Container>
     <div className='img-div'>  
       <img src="final_ceson_logo.png" alt="" /></div>
    
     <div >
   <ul className='header-listItems'>
    <li>
      <Link to ="/Home" className='items'>Home</Link>
    </li>
    <li>
      <Link to ="/About" className='items'>About Us</Link>
    </li>
    <li>
      <Link to ="/Services" className='items'>Our Services</Link>
    </li>
    <li>
      <Link to ="/Client" className='items'>Clients and Partner</Link>
    </li>
    <li>
      <Link to ="/Career" className='items'>Career with Us</Link>
    </li>
    <li>
      <Link to ="/Contact" className='items'>Contact Us</Link>
    </li>

   </ul>
     </div>

     <div className='header-Search'>
      <input type="text" />
      <Search className='icon'></Search>
     </div>
       
    </Container>
  )
}

export default Header

const Container = styled.div`
  
  height:120px;
  display:flex;
  justify-content :space-between;
  align-items: center;
 
 padding: 20px;
 background-color:black;
/* background-color: #0F0F0F; */
 position:sticky;
 top:0px;
   
  .img-div{

    height:100px;
    width:100px;
  

    
  }
  img{
     height:100%;
     width:100%;
     object-fit:contain;
  }

  .header-listItems{

    display:flex;
    justify-content:center;
    align-items:center;
  list-style:none;
  text-decoration:none;
  margin-left:150px;
  gap:18px;

  .items{

     list-style:none;
     text-decoration:none;
     color:black;
     font-weight:bold;
     font-size:18px;
     color:white;
  
    &:hover{
     

      
        color:#0079FF;
      

    }
  }

 
  }

  
.header-Search{


   
    width:200px;
     padding:1px;
    display: flex;
    justify-content:space-between;
    align-items:center;

    
    &:hover{

    
      border:2px solid green;

    
    } 
   
   
  
  
  input{
   
   
    border:none;
    outline:none;
    padding:0px 5px; 
   font-size:18px;
   background:none; 
   width:170px;
   font-family:"Helvetica";
   height:30px;


    &:hover{

background:none;
color:white;

 } 

  }

  .icon{
    color:#0079FF;
    font-weight:bold;
    height:30px;
    width:30px;
  
    
  }
}


`