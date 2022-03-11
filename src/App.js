import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import SearchResults from "./components/Results/Results";

function App() {
  return (
    <div>
      <header>
        <h1>PROJECT TITLE HERE</h1>
        <form>
          <input type="text" placeholder="Search stuff would go here" />
        </form>
      </header>
      <main>
        <SearchResults />
      </main>
    </div>
  );
}

export default App;
