import React from "react";
import StyledGameView from "./styled";
import GameBoard from "../GameBoard";

const GameView = props => (
  <StyledGameView>
    <GameBoard />
  </StyledGameView>
);

export default GameView;
