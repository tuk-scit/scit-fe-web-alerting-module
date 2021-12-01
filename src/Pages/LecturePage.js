import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../resources/ThemeColors";
import LectureCard from "../Components/Cards/LectureCard";

export default function LecturePage() {
  const [cohort, setCohort] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const selectedClass = localStorage.getItem("class");
    setCohort(JSON.stringify(localStorage.getItem("class")));
    var date = new Date();
    var day = date.getDay();

    const fetchData = async () => {
      try {
        const response = await fetch(`http://34.69.108.6/lessons`);
        const data = await response.json();
        // let strClass = JSON.stringify(localStorage.getItem("class"));
        setData(data.data.data["SCII/2018"]);
        // console.log(data.data.data["SCCI/2018"]);
        // console.log("heeeey", JSON.stringify(localStorage.getItem("class")));
      } catch {
        console.log("error");
        setError("error");
      }
    };
    fetchData();
  }, []);
  return (
    <MainDiv>
      <h1>Upcoming Lectures for {cohort}</h1>
      {error !== null ? (
        <p style={{ height: "80vh" }}>
          An error occured while fetching the data
        </p>
      ) : (
        <div>
          {data.map((item, index) => {
            return <LectureCard key={index} data={item} />;
          })}
        </div>
      )}
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
