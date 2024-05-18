import React, { useState } from "react";
import  useFlip from './hooks/useFlip'
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [showCardFace, setShowCardFace] = useFlip();

  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  return (
    <img
      src={showCardFace ? front : back}
      alt="playing card"
      onClick={setShowCardFace}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
