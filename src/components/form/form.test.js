import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from './form';


configure({ adapter: new Adapter() });

describe('<Post />', () => {

  const timestamp = Date.now();

  const testData = { blocked: true };

  const wrapper = shallow(<Form />).setProps(testData);
  
  it('Should block when blocked', () => {  // check the style present, it's enough
    expect(wrapper.children().find('.blocked')).toHaveLength(1);
  })
})