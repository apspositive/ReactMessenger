import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Page from './Page';


configure({ adapter: new Adapter() });

describe('<Home />', () => {
  const testData = {
    activities: [
      { id: 0, age: '3d', eventType: 1, who: 'You', comment: 'dummy', whoom: 'Milton Romaguera' },
      { id: 1, age: '3d', eventType: 2, who: 'You', comment: 'dummy', whoom: 'Milton Romaguera' },
      { id: 2, age: '3d', eventType: 3, who: 'You', comment: 'dummy', whoom: 'Milton Romaguera' },
      { id: 3, age: '3d', eventType: 4, who: 'You', comment: 'dummy', whoom: 'Milton Romaguera' },
      { id: 4, age: '3d', eventType: 5, who: 'You', comment: 'dummy', whoom: 'Milton Romaguera' }
    ],
  };

  let wrapper;

  beforeEach(() => { // assign the function to run before each test, to have them isolated
    wrapper = shallow(<Page />);
  })

  it('Should display loading when loading', () => { // if state is loading- we should have a message
    wrapper.setState({ loading: true }, () => {
      wrapper.update();
      expect(wrapper.children().find('p').text()).toEqual('Loading..');
    })
  })

  it('Should display all provided posts', () => { // check for dummy data with n entities
    wrapper.setState({ loading: false, activities: testData.activities }, () => {
      wrapper.update();
      expect(wrapper.find('activity')).toHaveLength(testData.activities.length);
    })
  })

})