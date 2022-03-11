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
        "https://api.seatgeek.com/2/events?per_page=1000&client_id=MjYwNjMzOTV8MTY0NzAyNTU1Ny4xNTg2NA"
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
      <header className="header">
        <h1 className="header__title">TBD</h1>
        <form>
          <input
            className="header__searchbar"
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
            <SearchResults
              name={affair.title}
              date={affair.datetime_local}
              location={affair.venue.name}
              address={affair.venue.address}
              image={affair.performers[0].image}
              key={affair.id}
            />
          ))}
      </main>
    </div>
  );
}

export default App;

// response.data._embedded.events[0]._embedded.venues[0].postalCode
