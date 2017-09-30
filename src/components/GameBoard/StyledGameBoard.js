import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, Grid } from 'grid-styled';

import { connect } from 'react-redux';
import Square from './Square';

import { toggleBoardNextRoundMethod, toggleGameOverMethod } from '../../actions/board/actions';

const neighborI = [-1, -1, 1, 1, 0, 0, 1, -1];
const neighborJ = [-1, 1, -1, 1, 1, -1, 0, 0];

class StyledGameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.instances = [];
    this.actionQueue = [];
    this.state = {
      timer: null,
      cellWasMadeActive: false,
    };
  }

  enqueueActions() {
    while (this.actionQueue.length > 0) {
      this.actionQueue.shift()();
    }
  }

  componentDidMount() {
    const timerNew = setInterval(this.trigger.bind(this), 1000);
    this.setState({
      timer: timerNew,
    });
  }

  componentWillReceiveProps(props) {
    const val = props.board.timer * 1000;

    clearInterval(this.state.timer);
    const timerNew = setInterval(this.trigger.bind(this), val);
    this.setState({
      timer: timerNew,
    });
  }

  check(cell, i, j) {
    if (cell == null) {
      return;
    }

    if (cell.isAlive()) {
      // if 2 or 3 neighbors are alive, keep alive. else die
      if (!this.hasTwoOrThreeAliveNeighbors(cell, i, j)) {
        this.actionQueue.push(this.wrapFunction(cell.setDead, cell, null));
        this.toggleNextRound();
      }
    } else if (this.hasThreeAliveNeighbors(cell, i, j)) {
      this.actionQueue.push(this.wrapFunction(cell.setAlive, cell, null));
      this.toggleNextRound();
    }
  }

  toggleNextRound() {
    if (!this.state.cellWasMadeActive) {
      this.setState({
        cellWasMadeActive: true,
      });
    }
  }

  wrapFunction(fn, context, params) {
    return function () {
      fn.apply(context, params);
    };
  }

  hasTwoOrThreeAliveNeighbors(cell, i, j) {
    const aliveNeighbors = this.getAliveNeighbors(cell, i, j);

    return aliveNeighbors == 3 || aliveNeighbors == 2;
  }

  getAliveNeighbors(cell, i, j) {
    let cellsTested = 0;
    let aliveNeighbors = 0;

    while (cellsTested != 8) {
      const thisCell = this.getCell(i + neighborI[cellsTested], j + neighborJ[cellsTested]);

      if (thisCell.isAlive()) {
        aliveNeighbors++;
      }

      cellsTested++;
    }

    return aliveNeighbors;
  }

  hasThreeAliveNeighbors(cell, i, j) {
    const aliveNeighbors = this.getAliveNeighbors(cell, i, j);

    if (aliveNeighbors == 3) {
      return true;
    }

    return false;
  }

  getCell(i, j) {
    const moduloI = this.instances.length;
    const moduloJ = this.instances[0].length;

    return this.instances[this.mod(i, moduloI)][this.mod(j, moduloJ)];
  }

  mod(n, m) {
    return (n % m + m) % m;
  }

  trigger() {
    if (!this.props.board.running) {
      return;
    }

    for (let i = 0; i < this.instances.length; i++) {
      for (let j = 0; j < this.instances[i].length; j++) {
        this.check(this.instances[i][j], i, j);
      }
    }

    this.enqueueActions();

    if (this.state.cellWasMadeActive) {
      this.props.toggleBoardNextRound();

      this.setState({
        cellWasMadeActive: false,
      });
    } else {
      this.props.toggleGameOver();
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    const { cells } = this.props.board;

    const deviceWidth = window.innerWidth;

    const cellWidth = window.innerWidth / cells * 0.55;
    const cellHeight = cellWidth;

    const cellMargin = 5;

    const components = [];
    this.instances = [];
    for (let i = 0; i < cells; i++) {
      const innerComponents = [];
      const innerInstances = [];

      for (let j = 0; j < cells; j++) {
        innerComponents.push(
          <Square
            ref={instance => innerInstances.push(instance)}
            margin={cellMargin}
            cellHeight={cellHeight}
            cellWidth={cellWidth}
          />,
        );
      }
      this.instances.push(innerInstances);
      components.push(innerComponents);
    }

    return (
      <div>
        <Grid m={15} width={cellWidth * cells + cellMargin * 2 * cells}>
          {components}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.get('board'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleBoardNextRound: () => dispatch(toggleBoardNextRoundMethod()),
    toggleGameOver: () => dispatch(toggleGameOverMethod()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StyledGameBoard);
