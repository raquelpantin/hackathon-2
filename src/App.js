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
        "https://api.seatgeek.com/2/events?client_id=MjYwNjMzOTV8MTY0NzAyNTU1Ny4xNTg2NA"
      )
      .then((response) => {
        console.log(response.data);
        setAffairs(response.data.events);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);

    // affairs.filter((affair) =>
    //   affair.venue.city.toLowerCase().includes(search.toLowerCase())
    // );
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
        {affairs
          .filter((affair) => {
            if (!search) {
              return true;
            }
            if (
              affair.venue.city.toLowerCase().includes(search.toLowerCase())
            ) {
              return true;
            }
            return false;
          })
          .map((affair) => (
            <SearchResults name={affair.title} />
          ))}
      </main>
    </div>
  );
}

export default App;

// response.data._embedded.events[0]._embedded.venues[0].postalCode
