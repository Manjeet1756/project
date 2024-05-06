import React from "react";
import styled from "styled-components";

const Cards = (props) => {
  return (
    <Container>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  height: 500px;
  width: 400px;

  position: relative;
  color: white;
  overflow: hidden;
  border-radius: 5px;
  z-index: 1;
  box-shadow: 3px 4px 10px black, 2px 2px 10px black;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  h1 {
    position: absolute;
    z-index: 1;
    top: 30px;
    left: 20px;
    color: white;
    &:hover {
      color: blue;
    }
  }
`;
