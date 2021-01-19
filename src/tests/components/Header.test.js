import { render } from 'node-sass';
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  //   expect(wrapper.find('h1').length).toBe('Expensify App');
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
