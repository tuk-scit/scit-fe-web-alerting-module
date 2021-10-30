import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../resources/ThemeColors";
import EventCard from "../Components/Cards/EventCard";
import axios from "axios";

export default function Events() {
  // state => "volatile data store"
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(false);
  // called when DOM (page) is loaded
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var config = {
        method: "get",
        url: "https://c546-62-8-66-64.ngrok.io/events",
        headers: {},
        mode: "no-cors",
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchData();
    setLoading(false);
  }, []);

  return (
    <MainDiv>
      {loading ? (
        <MainDiv style={{ height: "80vh" }}>
          <p>Loading...</p>
        </MainDiv>
      ) : (
        <>
          {events}
          <h1>Upcoming Events</h1>
          <div>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </>
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
