import React, { useState, useEffect } from "react";

function Form({ setCocktails }) {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const updateQuery = (e) => {
    setInput(e.target.value);
  };

  //trasferimento dati inseriti in query
  const searchCocktail = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
  };

  //ricerca drinks in base a query
  const fetchQuery = async () => {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    );
    const results = await data.json();
    setCocktails(results.drinks);
  };

  //avvia funzione al primo caricamento e ogni volta che cambia 'query'
  useEffect(() => {
    fetchQuery();
  }, [query]);

  return (
    <div className="form">
      <form action="" method="post" onSubmit={searchCocktail}>
        <i class="fas fa-search"> </i>
        <input
          type="text"
          placeholder="Search cocktail"
          value={input}
          onChange={updateQuery}
        />
        <button type="submit"> Search </button>
      </form>
    </div>
  );
}

export default Form;
