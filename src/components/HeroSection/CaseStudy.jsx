import React from "react";
import styled from "styled-components";
import { ChevronRight } from "react-feather";

const CaseStudy = (props) => {
  return (
    <Container>
      <img src={props.img} />
      <h1 className="title">{props.title}</h1>
      <p className="challenge">{props.challenge}</p>
      <button>
        ReadMore <ChevronRight></ChevronRight>
      </button>
    </Container>
  );
};

export default CaseStudy;

const Container = styled.div`
  height: 450px;
  width: 380px;
  color: black;
  padding: 5px;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  .title {
    font-size: 30px;
  }

  button {
    font-size: 20px;
    margin-top: 50px;
    padding: 5px 9px;
    color: black;
    display: flex;
    border: none;
   
    border-radius: 9px;
    font-weight: bolder;
    align-items: center;
    transition: 0.3s ease-in-out;
    background: transparent;

    &:hover {
      background: black;
      color: white;
      border: 1px solid black;
    }
    
  }
`;
