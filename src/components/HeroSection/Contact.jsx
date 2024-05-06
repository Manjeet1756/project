import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <Container>
      <div className="form-container">
        <form className="form">
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <textarea placeholder="Write here..."></textarea>

          <button>Contact us..</button>
        </form>
      </div>

      <div className="box">
        <img src="contact us.avif" alt="" />
      </div>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 570px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    width: 50%;
    height: 100%;

    background-image: linear-gradient(to bottom, #626262, #292929);
  }

  .form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 70px 150px;
    text-align: center;

    input {
      height: 60px;
      width: 100%;
      padding: 20px 10px;
      border: 4px solid black;
      background: transparent;
    }
    
    textarea {
      height: 150px;
      width: 100%;
      font-size: 30px;
      padding: 10px;
      border: 4px solid black;

      background: transparent;
    }
    textarea::placeholder {
      font-size: 25px;
      color: white;
    }
    input::placeholder {
      font-size: 25px;
      color: white;
    }
  }

  .box {
    height: 100%;
    width: 50%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  button {
    height: 60px;
    width: 150px;
    margin-left: 150px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 100px;
    border: none;

    &:hover {
      color: white;
      background-color: #fff;
    }
  }
`;
