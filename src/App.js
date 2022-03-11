import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import SearchResults from "./components/Results/Results";

function App() {
  const [affairs, setAffairs] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?apikey=EdlG9SZrgmuxDIKgA5lqUxAi8qJpe3Fd"
      )
      .then((response) => {
        console.log(response.data);
        setAffairs(response.data);
      })
      .catch((error) => console.log(error));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // const postalCode = response.data._embedded.events[0]._embedded.venues[0].postalCode

  const filterAffairs = affairs.filter((affair) => {
    if (affair.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
  });

  return (
    <div>
      <header>
        <h1>PROJECT TITLE HERE</h1>
        <form>
          <input
            type="text"
            placeholder="Search by zip code"
            onChange={handleChange}
          />
        </form>
      </header>
      <main>
        {filterAffairs.map((affair) => {
          return <SearchResults key={affair.id} name={affair.name} />;
        })}
      </main>
    </div>
  );
}

export default App;

// response.data._embedded.events[0]._embedded.venues[0].postalCode
