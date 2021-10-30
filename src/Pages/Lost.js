import React from "react";
import styled from "styled-components";
import colors from "../resources/ThemeColors";

const MainComponent = styled.div`
  height: 80vh;
  width: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 8em;
  font-weight: 900;
  color: ${colors.background};
  @media (max-width: 600px) {
    font-size: 5em;
  }
`;

const Tagline = styled.p`
  margin-top: 0.5em;
  font-size: 1.4em;
  font-weight: 400;
  color: grey;
`;

const Button = styled.button`
  height: 3em;
  width: 10em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  background-color: ${colors.main};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2em;
`;

function LostPage() {
  return (
    <MainComponent>
      <Title>404</Title>
      <Tagline>Sorry, it's not you, it's us.</Tagline>
      <a href="/">
        <Button>Go back Home</Button>
      </a>
    </MainComponent>
  );
}

export default LostPage;
