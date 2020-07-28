import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Activity from './activity';


configure({ adapter: new Adapter() });

describe('<Post />', () => {
  const testData = { age: 0, eventType: 1, who: 'Test_who',  whoom: 'Test_whoom', children: 'Test_paragraph' };

  const wrapper = shallow(<Activity />).setProps(testData);
  
  it('Should display age and icon', () => {  // check the formatting
    expect(wrapper.children().find('div').first().text()).toEqual(testData.age.toString());
    expect(wrapper.children().find('div').at(1).find('icon')).toHaveLength(1);
  })

  it('Should display text properly formatted', () => {  // check the formatting
    expect(wrapper.children().find('div').at(2).find('span').first().text()).toEqual(testData.who + ' ');
    expect(wrapper.children().find('div').at(2).find('span').at(2).text()).toEqual(testData.whoom);
    expect(wrapper.children().find('div').at(2).find('p').text()).toEqual(testData.children);
  })

})