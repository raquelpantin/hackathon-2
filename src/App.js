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
        `https://api.seatgeek.com/2/events?venue.city=${search}&client_id=MjYwNjMzOTV8MTY0NzAyNTU1Ny4xNTg2NA`
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

  // const filterAffairs = affairs.filter((affair) =>
  //   affair.events[0].city.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div>
      <header>
        <h1>PROJECT TITLE HERE</h1>
        <form>
          <input
            type="text"
            placeholder="Search by City"
            onChange={handleChange}
          />
        </form>
      </header>
      <main>
        <SearchResults />;
      </main>
    </div>
  );
}

export default App;

// response.data._embedded.events[0]._embedded.venues[0].postalCode
