import React from "react";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";
import LectureCard from "../Components/Cards/LectureCard";

export default function LecturePage() {
  return (
    <MainDiv>
      <h1>Upcoming Lectures</h1>
      <div>
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
      </div>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  height: auto;
  width: 100vw;
  margin: 0;
  overflow: hidden;
  background-color: ${colors.background};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 2em;

  > h1 {
    font-size: 1.35em;
    font-weight: 700;
  }

  > div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
`;
