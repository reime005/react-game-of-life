import React from "react";
import StyledControlView from "./styled";
import StyledHeader from "./StyledHeader";

import CellSlider from "./CellSlider";
import TimeSlider from "./TimeSlider";
import StartStopButton from "../StartStopButton";
import GameRoundView from "../GameRoundView";
import BoardResetButton from "../BoardResetButton";

const ControlView = props => (
  <StyledControlView>
    <StyledHeader>Conway's Game of Life by Marius Reimer</StyledHeader>
    <GameRoundView />
    <BoardResetButton />
    <CellSlider />
    <TimeSlider />
    <StartStopButton />
  </StyledControlView>
);

export default ControlView;
