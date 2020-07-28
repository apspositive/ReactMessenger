import React from 'react';

import Selector from './selector/selector';
import Icon from '../UX/icons/icons';

import './form.scss';


const form = (props) => {
  const { blocked, whoom, typeSelectHandler } = props
  const startValue = 'Add some note about ' + whoom; // build the text for textArea

  // Let's block the button when updating previous
  const className = blocked? 'blocked' : null;
  const submitButtonClickHandler = !blocked? props.submitButtonClickHandler : null;

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
          <button className={className} onClick={submitButtonClickHandler} >Submit</button>
        </div>
      </div>
    </div>
  )
}

export default form;