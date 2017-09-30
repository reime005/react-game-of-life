import React from 'react';
import { shallow, configure, mount } from 'enzyme';

import App from '../index';
import Adapter from 'enzyme-adapter-react-15';

import configureStore from "../../../store";

const initialState = {};
const store = configureStore(initialState);

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should not just render one given component', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toBe(false);
  });
});
