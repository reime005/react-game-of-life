import React, { Component } from "react";

import { connect } from "react-redux";

import StyledGameRoundView from "./styled";

class GameRoundView extends React.Component {
  render() {
    const { currentRound, running, lastRound, bestRound } = this.props.board;

    return (
      <StyledGameRoundView running={running}>
        {`Current Round: ${currentRound}`}
        <br />
        {lastRound != 0 && lastRound != undefined ? (
          `Last Round was ${lastRound}`
        ) : (
          ""
        )}
        <br />
        {bestRound != 0 && bestRound != undefined ? (
          `Best Round was ${bestRound}`
        ) : (
          ""
        )}
      </StyledGameRoundView>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.get("board")
  };
}

export default connect(mapStateToProps, null)(GameRoundView);
