import React from "react";
import styled from "styled-components";
import Home from "../resources/home.png";
import Stage from "../resources/stage.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MainDiv>
      <Link to={`/upcoming-lectures/${localStorage.getItem("class")}`}>
        {" "}
        <img src={Home} alt=""></img>
      </Link>
      <Link to="/upcoming-events">
        {" "}
        <img src={Stage} alt=""></img>
      </Link>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 10;
  height: 10vh;
  background-color: #43718c;
  width: 100%;
  padding: 1em 2em 1em 2em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 600px) {
    display: none;
  }
`;
