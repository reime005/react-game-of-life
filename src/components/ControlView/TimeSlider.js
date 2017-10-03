import React, { Component } from "react";
import Slider from "react-rangeslider";
import { setBoardTimerMethod } from "../../actions/board/actions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import StyledCellViewWrapper from "./StyledCellViewWrapper";

class TimeSlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 1.0
    };
  }

  handleChange(value) {
    this.setState({
      value
    });

    this.props.setBoardTimer(value);
  };

  render() {
    const { value } = this.state;
    return (
      <StyledCellViewWrapper>
        <div className="slider">
          Seconds round time:
          <Slider
            min={0.25}
            max={5.0}
            value={value}
            step={0.25}
            onChange={this.handleChange.bind(this)}
          />
          <div className="value">{value}</div>
        </div>
      </StyledCellViewWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setBoardTimer: number => dispatch(setBoardTimerMethod(number))
  };
}

export default connect(null, mapDispatchToProps)(TimeSlider);
