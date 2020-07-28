import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Selector from './selector';


configure({ adapter: new Adapter() });

describe('<Post />', () => {
  
  const wrapper = shallow(<Selector typeSelectHandler={null} />);

  it('Should return 5 labels', () => {  // check the icon
    expect(wrapper.children().find('icon')).toHaveLength(5);
  })
})