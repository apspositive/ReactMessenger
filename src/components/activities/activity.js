import React from 'react'

import Icon from '../UX/icons/icons'
import eventTypes from '../../dataSources/eventTypes';

import classes from './activity.module.scss'

const activity = (props) => {
  const { age, eventType, who, whoom, children: comment } = props;

  if (eventType)
    return (
      <div className={classes.activity}>
        <div className='age col1'>{age}</div>
        <div className='col2'><Icon type={eventType} /></div>
        <div className='col3'>
          <span className={classes.who}>{who} </span>
          <span className={classes.what}>{eventTypes[eventType].text} </span>
          <span className={classes.whoom}>{whoom}</span>
          <p>{comment}</p>
        </div>
      </div>
    );

  return null
}

export default activity;