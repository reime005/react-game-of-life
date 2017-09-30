import * as types from "../actions/board/actionTypes";

const initialState = {
  cells: 12,
  timer: 0.5,
  running: false,
  currentRound: 0,
  lastRound: 0,
  bestRound: 0
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case types.BOARD_SET_CELLS:
      return {
        ...state,
        cells: action.data
      };
    case types.BOARD_SET_TIMER:
      return {
        ...state,
        timer: action.data
      };
    case types.BOARD_TOGGLE_RUNNING:
      return {
        ...state,
        running: !state.running
      };
    case types.BOARD_TOGGLE_NEXT_ROUND:
      return {
        ...state,
        round: ++state.currentRound
      };
    case types.BOARD_RESET:
      return {
        ...state,
        lastRound: 0,
        bestRound: 0,
        running: false,
        currentRound: 0
      };
    case types.BOARD_GAME_OVER:
      let newBestRound = state.round;
      if (newBestRound < state.bestRound) {
        newBestRound = state.bestRound;
      }
      return {
        ...state,
        running: false,
        lastRound: state.round,
        bestRound: newBestRound,
        currentRound: 0
      };
    default:
      return state;
  }
}
