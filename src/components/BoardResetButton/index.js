import React, { Component } from 'react';

import { connect } from 'react-redux';

import { toggleBoardResetRoundMethod } from '../../actions/board/actions';
import StyledBoardResetButton from './styled';

const BoardResetButton = props => (
  <StyledBoardResetButton onClick={props.toggleBoardResetRound.bind(this)}>
    {'Reset Stats'}
  </StyledBoardResetButton>
);

function mapDispatchToProps(dispatch) {
  return {
    toggleBoardResetRound: () => dispatch(toggleBoardResetRoundMethod()),
  };
}

export default connect(null, mapDispatchToProps)(BoardResetButton);
