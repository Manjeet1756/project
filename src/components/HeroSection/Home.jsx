import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import CaseStudy from "./CaseStudy";
import SmallCards from "./SmallCards";
const Home = () => {
  return (
    <>
      <Container1>
        <div className="box-1 Item">
          <video src="vv.mp4" autoPlay loop></video>
        </div>
        <div className="box-2 Item">
          <h3>Transforming Ideas into Digital Reality</h3>

          <hr />
          <h1>
            Crafting innovative software solutions tailored to your needs. Let's
            collaborate and drive digital evolution together.
          </h1>
          <button>Explore</button>
        </div>
      </Container1>

      <Container2>
        <div className="img">
          <img src="tech pi.jpg" alt="" />
        </div>

        <div className="section2-box">
          <h1>A Tech Company's Enthusiasm</h1>
          <p>
            Our team of passionate individuals, fueled by curiosity and
            creativity, thrives on challenges and embraces change as an
            opportunity for growth. We believe in the power of collaboration and
            diversity, leveraging unique perspectives to unlock innovative
            solutions. With a commitment to excellence and a passion for
            technology, we are not just building products; we are shaping the
            future of tech.
          </p>
        </div>
      </Container2>
      <Container3>
        <h1 className="title">
          Achieve business excellence through the adoption of advanced
          technologies.
        </h1>
        <div className="cards">
          <Cards img="Ml pic.jpg" title="Machine Learning" />
          <Cards img="Ai.jpg" title="Artificial Intelligence" />
          <Cards img="Web.jpg" title="Web Technologies" />
        </div>
      </Container3>

      <Container4>
        <h1 className="Title">Turning belief into action.</h1>
        <div className="Case-Study">
          <CaseStudy
            img="1.webp"
            title="Enhancing Customer Engagement with finance App"
            challenge="Challenge:ABC Corp sought to improve customer engagement and loyalty through a mobile app"
          />
          <CaseStudy
            img="2.avif"
            title="Optimizing Supply Chain Efficiency for LMN Logistics"
            challenge=" Challenge: LMN Logistics faced challenges in optimizing their supply chain and reducing operational costs.

"
          />

          <CaseStudy
            img="3.jpg"
            title="Improving Employee Productivity at PQR Enterprises"
            challenge="Challenge: PQR Enterprises wanted to boost employee productivity and collaboration across teams."
          />
          <CaseStudy
            img="4.jpg"
            title="Enhancing Online Sales for UVW Retail"
            challenge="Challenge: UVW Retail aimed to increase online sales and improve the digital shopping experience.

"
          />

          <CaseStudy
            img="5.avif"
            title="Streamlining HR Processes for XYZ Corp"
            challenge="Challenge: XYZ Corp needed to streamline HR processes and improve employee satisfaction."
          />
          <CaseStudy
            img="6.jpg"
            title="Improving Customer Service at ABC Bank"
            challenge="Challenge: ABC Bank wanted to enhance customer service and satisfaction levels.

"
          />
        </div>
      </Container4>

      <Container5>
        <div className="section5-box1">
          <img src="transformation.webp" alt="img" />
        </div>
        <div className="section5-box2">
          <h1>Begin your transformation journey here.</h1>
          <p>
            Want to kickstart your journey to a better future? Reach out and
            let's discuss how we can support you.
          </p>
          <button>Lets's Discuss</button>
        </div>
      </Container5>
      <Container6>
        <SmallCards
          img="6.jpg"
          title="
Six Cloud Evolution Predictions For 2024"
        />
        <SmallCards
          img="3.jpg"
          title="
Cloud’s Transformation of Financial Services."
        />
        <SmallCards
          img="4.jpg"
          title="
Navigating the Cloud-Native Maze"
        />
        <SmallCards
          img="1.webp"
          title="Powering Cloud Innovation in The Energy and Utilities Industry"
        />
      </Container6>
    </>
  );
};

export default Home;

const Container1 = styled.div`
  height: 700px;
  width: 100%;

  .box1 {
    height: 100%;
    width: 100%;
    position: relative;
  }
  video {
    height: 700px;
    width: 100%;
    object-fit: cover;
  }

  .box-2 {
    display: flex;
    position: absolute;
    align-items: left;
    padding: 0px 200px;
    flex-direction: column;
    height: 700px;
    width: 100%;
    top: 150px;
    background: none;
    color: white;

    h1 {
      font-size: 50px;
      font-weight: normal;
      margin-top: 30px;
    }
    h3 {
      font-size: 25px;
      font-weight: lighter;
      margin-bottom: 30px;
    }

    button {
      height: 60px;
      width: 150px;
      font-size: 30px;
      border-radius: 100px;
      font-weight: lighter;
      color: white;
      background-color: #0079ff;
      transition: 0.4s ease-in;

      border-style: none;
      margin-top: 40px;

      &:hover {
        color: #0079ff;
        background-color: white;
        transition: 0.3s ease-in;
      }
    }
  }
`;

const Container2 = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 0px 40px;

  .img {
    width: 50%;
    height: 500px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .section2-box {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    width: 50%;

    word-wrap: break-word;
    line-height: 25px;
  }
  h1 {
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
  }
`;

const Container3 = styled.div`
  display: flex;
  height: 800px;
  width: 100%;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background-color: #525252;
  gap: 20px;

  .title {
    margin-left: 70px;
    color: white;
    font-weight: lighter;
    font-size: 25px;
    font-family: cursive;
  }

  .cards {
    height: 600px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
const Container4 = styled.div`
  height: 1200px;
  width: 100%;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .Case-Study {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 80px;
    justify-content: space-between;
  }

  .Title {
    font-family: cursive;
    margin-bottom: 20px;
    font-size: 30px;
  }
`;

const Container5 = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: white;

  .section5-box1 {
    height: 100%;
    width: 50%;
  }

  .section5-box1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .section5-box2 {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 130px 80px;
    background-color: #525252;
    gap: -60px;
    button {
      height: 65px;
      width: 200px;
      font-size: 25px;
      border: none;
      background: transparent;
      color: white;
      background-color: #ff9800;
      border-radius: 100px;

      &:hover {
        color: orange;
        background-color: white;
      }
    }
    h1 {
      font-size: 50px;
      color: white;
      font-weight: lighter;
    }
    p {
      font-size: 30px;
    }
  }
`;
const Container6 = styled.div`
  height: 750px;
  width: 100%;
  background-color: #d4e5f8;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 0.5fr);
  gap: 20px;

  padding: 60px;
`;
