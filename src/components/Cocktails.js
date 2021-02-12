import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Cocktails({ cocktails, browseMore }) {
  const button = document.querySelector(".button-more");
  const cards = document.querySelectorAll(".card");

  //rimuovi pulsante se in Details
  if (browseMore) {
    if(button){
      button.removeAttribute("style");
    }
  }

  //Mostra più drinks e rimuovi pulsane 'load more'
  const loadMore = () => {
    cards.forEach((card) => {
      card.classList.remove("hide");
    });
    button.removeAttribute("style");
  };

  //Nascondi drink = ripristina stato originale
  const loadLess = () => {
    cards.forEach((card) => {
      card.classList.add("hide");
    });
    document
      .querySelector(".button-more")
      .setAttribute("style", "display: block");
  };

  //Avvia funzione ogni volta che cambia 'cocktails',quindi quando viene cercato un altro drink
  useEffect(() => {
    loadLess();
  }, [cocktails]);

  //Stili link e pulsanti
  const cardStyle = {
    textDecoration: "none",
    color: "#121212",
  };
  const buttonStyle = {
    display: "block",
  };

  return (
    <div className="cocktails">
      <div className="cocktails-container">
        {cocktails.map((cocktail) => (
          <Link
            className="card hide"
            to={`/${cocktail.idDrink}`}
            style={cardStyle}
          >
            <div className="drink-card">
              <img src={cocktail.strDrinkThumb} alt="" />
              <h2>{cocktail.strDrink}</h2>
            </div>
          </Link>
        ))}
      </div>
      <button className="button-more" style={buttonStyle} onClick={loadMore}>
        Load More +
      </button>
    </div>
  );
}

export default Cocktails;
