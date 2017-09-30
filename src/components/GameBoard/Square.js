import React from 'react';

import { Flex, Box, Grid } from 'grid-styled';
import StyledSquareButton from './StyledSquareButton';

import TimerMixin from 'react-timer-mixin';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alive: false,
      timer: null,
    };
  }

  toggleValue() {
    this.setState({
      ...this.state,
      alive: !this.state.alive,
    });
  }

  isAlive() {
    return this.state.alive;
  }

  setAlive() {
    this.setState({
      ...this.state,
      alive: true,
    });
  }

  setDead() {
    this.setState({
      ...this.state,
      alive: false,
    });
  }

  render() {
    const t = this.state.toggled ? 'black' : 'red';
    const { cellWidth, cellHeight, margin } = this.props;

    return (
      <Grid height={cellHeight} m={margin} width={cellWidth}>
        <StyledSquareButton
          className="square"
          width={cellWidth}
          height={cellHeight}
          onClick={this.toggleValue.bind(this)}
          active={this.state.alive}
        />
      </Grid>
    );
  }
}

export default Square;
