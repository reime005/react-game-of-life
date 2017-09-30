import React from 'react';
import { shallow, configure, mount } from 'enzyme';

import App from '../../App';
import Adapter from 'enzyme-adapter-react-15';

import * as types from '../../../actions/board/actionTypes';
import boardReducer from '../../../reducers/boardReducer';

import StyledGameBoard from '../StyledGameBoard';

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../../store";


import Square from '../Square';

const initialState = {};

configure({ adapter: new Adapter() });

describe('boardReducer', () => {
  it('should return the initial state', () => {
    expect(boardReducer(undefined, {})).toEqual(
      {
        cells: 12,
        timer: 0.5,
        running: false,
        currentRound: 0,
        lastRound: 0,
        bestRound: 0
      }
    );
  });
});

// describe('test', () => {
//     it('this is obviously', () => {
//         expect(1).toBeGreaterThan(0);
//     })
// })

describe('GameBoard', () => {
    let store, container;
    const mockStore = configureStore;

    beforeEach(()=>{
        store = mockStore(initialState)
        container = mount(
            <Provider store={store}>
                <App /> 
            </Provider>
    )
    });

    it('initially contains 12 Cells/Squares', () => {
        expect(container.find(Square).length).toEqual(12*12);
    })
});
