import React, { Component } from 'react';
import { toggleGameRunningMethod } from '../../actions/board/actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StyledStartStopButton from './styled';

const StartStopButton = (props) => {
  const { running } = props.board;

  let buttonText = '';
  if (running) {
    buttonText = 'Stop Game';
  } else {
    buttonText = 'Start Game';
  }

  return (
    <StyledStartStopButton onClick={props.toggleGameRunning.bind(this)} running={running}>
      {buttonText}
    </StyledStartStopButton>
  );
};

function mapStateToProps(state) {
  return {
    board: state.get('board'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleGameRunning: () => dispatch(toggleGameRunningMethod()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartStopButton);
