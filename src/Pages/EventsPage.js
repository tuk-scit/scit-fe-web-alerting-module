import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../resources/ThemeColors";
import EventCard from "../Components/Cards/EventCard";
import axios from "axios";

export default function Events() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const arr = [];
    const fetchData = async () => {
      try {
        const response = await fetch(`http://34.69.108.6/events`);
        const data = await response.json();
        console.log(data.data.events[0]);
        arr.push(data.data.events[0]);
        arr.push(data.data.events[1]);
        arr.push(data.data.events[2]);
        setData(arr);
      } catch (error) {
        console.log("error", error);
        setError("error");
      }
    };
    fetchData();
  }, []);

  return (
    <MainDiv>
      <h1>Upcoming Events</h1>

      <div>
        {data.map((item, index) => {
          return <EventCard key={index} data={item} />;
        })}
      </div>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  height: 100vh;
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
