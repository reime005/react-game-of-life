import React from 'react';
import { connect } from 'react-redux';

import StyledGameBoard from './StyledGameBoard';
import Square from './Square';

class GameBoard extends React.Component {
  render() {
    return <StyledGameBoard />;
  }
}

function mapStateToProps(state) {
  return {
    board: state.get('board'),
  };
}

export default connect(mapStateToProps, null)(GameBoard);
