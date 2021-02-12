import React from "react";

function Info({ cocktails }) {
  
  let totalIngredients = [];

  //  Ottieni numero totale ingredienti
  for (let i = 1; i < cocktails.length; i++) {
    cocktails.filter((cocktail) => {
      if (cocktail[`strIngredient${i}`] != null) {
        totalIngredients.push(cocktail[`strIngredient${i}`]);
      }
    });
  }

  //  ottieni numero totale immagini
  let totalImages = cocktails.filter(
    (cocktail) => cocktail.strDrinkThumb != null
  );

  return (
    <div className="info-container">
      <div className="info">
        <ul>
          <li>
            <img src={"./img/drink.svg"} /> Total Drinks:
            <span>{cocktails.length}</span>
          </li>
          <li>
            <img src={"./img/lemon.svg"} /> Total Ingredients:
            <span>{totalIngredients.length}</span>
          </li>
          <li>
            <img src={"./img/cocktail.svg"} /> Drink Images:
            <span>{totalImages.length}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
