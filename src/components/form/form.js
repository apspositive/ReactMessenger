import React from 'react';

import Selector from './selector/selector';
import Icon from '../UX/icons/icons';

import './form.module.scss';


const form = (props) => {
  const { whoom, submitButtonClickHandler, typeSelectHandler } = props
  const startValue = 'Add some note about ' + whoom;

  return (
    <div className='flex'>
      <div className='col1' />
      <div className='col2' >
        <Icon type='0' />
      </div>
      <div className='formWrapper col3'>
        <textarea id='inputText' type='text' defaultValue={startValue}></textarea>
        <div>
          <Selector typeSelectHandler= {typeSelectHandler} />
          <button onClick={submitButtonClickHandler} >Submit</button>
        </div>
      </div>
    </div>
  )
}

export default form;