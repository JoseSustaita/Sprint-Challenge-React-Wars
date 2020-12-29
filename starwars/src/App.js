import React, { useEffect, useState } from "react";
import PersonCard from "./components/PersonCard";
import styled from "styled-components";
import axios from "axios";
import "./App.css";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  const [people, setPeople] = useState([]);

  // API Request
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((response) => {
        const people = response.data.results;
        console.log("Star Wars Characters: ", people);
        setPeople(people);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        {people.map((person) => {
          return (
            <PersonCard
              key={person.name}
              name={person.name}
              height={person.height}
              mass={person.mass}
              hairColor={person.hair_color}
              skinColor={person.skin_color}
              eyeColor={person.eye_color}
              birthYear={person.birth_year}
              gender={person.gender}
              films={person.films.length}
              starships={person.starships.length}
            />
          );
        })}
      </Container>
    </div>
  );
};
export default App;
