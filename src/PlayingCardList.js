import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";
import  useAxios from './hooks/useAxios'
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/";

function CardTable() {
  const [data, addCard, clearCards ] = useAxios(BASE_URL);
  const handleAddCard = () => addCard();
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
        <button onClick={clearCards}>Clear Board</button>
      </div>
      <div className="PlayingCardList-card-area">
        {data.cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
