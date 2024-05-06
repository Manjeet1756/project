import React from "react";
import styled from "styled-components";
const SmallCards = (props) => {
  return (
    <Container>
      <div className="img">
        {" "}
        <img src={props.img} alt="" />
      </div>

      <div className="box">
        <h1>{props.title}</h1>
        <button>Read more</button>
      </div>
    </Container>
  );
};

export default SmallCards;

const Container = styled.div`
  height: 280px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  border-radius: 50px;
  background: white;
  .img {
    height: 100%;
    width: 300px;

    img {
      height: 100%;
      width: 300px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      object-fit: cover;
    }
  }
  h1 {
    font-size: 28px;
  }
  .box {
    padding: 10px;
  }

  button {
    font-size: 20px;
    padding: 0px 10px;
    margin-top: 30px;
    border: none;
    background-color: white;
    color: gray;
    cursor: pointer;

    &::hover {
      color: blue;
    }
  }
`;
