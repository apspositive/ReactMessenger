import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Icon from './icons';


configure({ adapter: new Adapter() });

describe('<Post />', () => {
  const testData = { title: 'Test_title', paragraph1: 'Test_paragraph1', paragraph2: 'Test_paragraph2' };

  const wrapper = shallow(<Icon type = '1' />);

  it('Should return icon', () => {  // check the icon
    expect(wrapper.find('i')).toHaveLength(1);
  })
})