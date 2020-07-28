import React from 'react'

import Icon from '../UX/icons/icons'
import eventTypes from '../../dataSources/eventTypes';

import classes from './activity.module.scss'



const activity = (props) => {
  const { isSaving, age, eventType, who, whoom, children: comment } = props;

  // Since textarea providing string with \newLines as body output - let's format it
  const formatNewLinesToParagraph = node => {
    if (node)
      return node.split('\n').map((item, key) => {
        return <p key={key}>{item}</p>
      });

    return null;
  }

  const timeConverted = () => {
    const timestamp = Date.now() - age;

    let result = Math.floor(timestamp / 1000 / 60); // in minutes

    if (!result) // les than minute
    {
      return 'now';
    }

    if (result < 60) // less than hour
    {
      return result.toString() + 'm';
    }

    result = Math.floor(result / 60); // in hours

    if (result < 24) // less than day
    {
      return result.toString() + 'h';
    }

    result = Math.floor(result / 24); // in days

    if (result < 7) // less than week
    {
      return result.toString() + 'd';
    }

    result = Math.floor(result / 7);

    return result.toString() + 'w';  // then return in weeks (dont want to dive deeper)
  }

  if (eventType) {
    const useClass = isSaving ? classes.activity_saving : classes.activity;
    return (
      <div className={useClass}>
        <div className='age col1'>{timeConverted()}</div>
        <div className='col2'><Icon type={eventType} /></div>
        <div className='col3'>
          <span className={classes.who}>{who} </span>
          <span className={classes.what}>{eventTypes[eventType].text} </span>
          <span className={classes.whoom}>{whoom}</span>
          {formatNewLinesToParagraph(comment)}
        </div>
      </div>
    );
  }

  return null
}

export default activity;