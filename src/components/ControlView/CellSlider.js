import React, { Component } from "react";
import Slider from "react-rangeslider";
import { setBoardCellsMethod } from "../../actions/board/actions";

import { connect } from "react-redux";
import StyledCellViewWrapper from "./StyledCellViewWrapper";
import { bindActionCreators } from "redux";

class CellSlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    this.state = {
      value: 12
    };
  }

  handleChange(value) {
    this.setState({
      value
    });

    this.props.setBoardCells(value);
  };

  render() {
    const { value } = this.state;
    return (
      <StyledCellViewWrapper>
        <div className="slider">
          Height/Width of the grid:
          <Slider
            min={4}
            max={30}
            value={value}
            step={1}
            onChange={this.handleChange}
          />
          <div className="value">{value}</div>
        </div>
      </StyledCellViewWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setBoardCells: number => dispatch(setBoardCellsMethod(number))
  };
}

export default connect(null, mapDispatchToProps)(CellSlider);
