import * as types from './actionTypes';

export function setBoardCellsMethod(number) {
  return {
    type: types.BOARD_SET_CELLS,
    data: number,
  };
}

export function setBoardTimerMethod(number) {
  return {
    type: types.BOARD_SET_TIMER,
    data: number,
  };
}

export function toggleGameRunningMethod() {
  return {
    type: types.BOARD_TOGGLE_RUNNING,
  };
}

export function toggleBoardNextRoundMethod() {
  return {
    type: types.BOARD_TOGGLE_NEXT_ROUND,
  };
}

export function toggleBoardResetRoundMethod() {
  return {
    type: types.BOARD_RESET,
  };
}

export function toggleGameOverMethod() {
  return {
    type: types.BOARD_GAME_OVER,
  };
}
