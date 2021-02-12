import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cocktails from "./Cocktails";

function Details({ match, cocktails }) {
  const [detail, setDetail] = useState({});
  const [instructions, setInstructions] = useState([]);
  let ingredientsArray = [];
  //variabile per nascondere pulsante 'load more'
  const browseMore = true;

  //cerca dettagli drink
  const fetchDetails = async () => {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
    );
    const details = await data.json();
    setDetail(details.drinks[0]);
    setInstructions(details.drinks[0].strInstructions.split("."));
  };

  //avvia funzione al primo caricamento
  useEffect(() => {
    fetchDetails();
  }, []);

  //  Ottieni gli ingredienti del drink
  for (let i = 1; i < 16; i++) {
    if (
      detail[`strIngredient${i}`] == null ||
      detail[`strMeasure${i}`] == null
    ) {
      break;
    }
    ingredientsArray.push({
      name: detail[`strIngredient${i}`],
      measure: detail[`strMeasure${i}`],
    });
  }

  //Rimuovi effetto link
  const linkStyle = {
    textDecoration: "none",
    color: "#121212",
  };

  return (
    <div className="details">
      <img src={detail.strDrinkThumb} alt="" />

      <div className="content">
        <div className="link">
          <Link to={`/`} style={linkStyle}>
            <p>Home </p>
          </Link>
          /<p> {detail.strDrink}</p>
        </div>

        <h1>{detail.strDrink}</h1>
        <ul>
          <h2>Instructions: </h2>
          {instructions.map((instruction) => (
            <li>
              <span>{instruction}</span>
            </li>
          ))}
          {/*Rimuovi elemento vuoto alla fine */}
          <li hidden>{instructions.pop()}</li>
        </ul>
        <div className="glass">
          <h2>Glass:</h2>
          <p>Serve: {detail.strGlass}</p>
        </div>
      </div>

      <div className="ingredients">
        <h2>Ingredients: ({ingredientsArray.length})</h2>
        <div className="ingredients-container">
          {ingredientsArray.map((ingredient) => (
            <div className="ingredient">
              <img
                src={`http://www.thecocktaildb.com/images/ingredients/${ingredient.name}-Medium.png`}
                alt={ingredient.name}
              />
              <h4>
                {ingredient.measure}
                {ingredient.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="browse-more">
        <Cocktails cocktails={cocktails} browseMore={browseMore} />
      </div>
    </div>
  );
}

export default Details;
