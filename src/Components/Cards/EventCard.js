import React from "react";
import styled from "styled-components";

import colors from "../../resources/ThemeColors";
import Bell from "../../resources/icons/bell.png";
import Clock from "../../resources/icons/clock.png";
import Pin from "../../resources/icons/pin.png";
import Dot from "../../resources/icons/circle-with-color.png";

export default function EventCard() {
  return (
    <MainDiv>
      <TitleDiv>
        <h2>cultural week</h2>
        <img src={Bell} alt="notification icon"></img>
      </TitleDiv>
      <ByText>by saTUK</ByText>
      <TimeDiv>
        <img src={Dot} alt="day dot"></img> <h4>Friday</h4>
      </TimeDiv>
      <LocationDayDiv>
        <div>
          <img src={Pin} alt="location icon"></img>
          <h4>D33</h4>
        </div>
        <div style={{ marginRight: "0", marginLeft: "auto" }}>
          <img src={Clock} alt="tim icon"></img>
          <h4>10am to 2pm</h4>
        </div>
      </LocationDayDiv>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  height: auto;
  width: 358px;
  background-color: ${colors.bluish};
  border: none;
  border-radius: 8px;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5em 1em 0.7em 1em;
  margin-top: 1.5em;
`;

const TitleDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  > h2 {
    font-size: 1.3em;
    font-weight: 800;
    letter-spacing: 1.05px;
    color: #122125;
  }
  > img {
    position: absolute;
    right: 0;
    height: 1.3em;
  }
`;

const ByText = styled.h3`
  font-size: 0.9em;
  font-weight: 500;
`;

const TimeDiv = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin-top: 0.4em;
  > img {
    height: 1.1em;
  }
  > h4 {
    margin-left: 0.5em;
    font-size: 0.95em;
    font-weight: 620;
  }
`;

const LocationDayDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.4em;
  position: relative;
  > div {
    height: auto;
    width: auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    position: ${(props) => (props.right ? "absolute" : "none")};
    right: ${(props) => (props.right ? "0" : "none")};
    > img {
      height: 1.15em;
    }
    > h4 {
      margin-left: 0.5em;
      font-size: 0.95em;
      font-weight: 620;
    }
  }
`;
