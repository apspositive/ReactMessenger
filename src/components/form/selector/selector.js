import React from 'react';

import Icon from '../../UX/icons/icons';

import classes from './selector.module.scss';

//     checked = 'true' produce some jumps
const selector = (props) => {

  const items = []

  for (let index = 1; index <= 5; index++) {
    items.push((
      <label key={index}>
        <input
          id={index}
          name="selector"
          type="radio"
          value={index}
          onChange={props.typeSelectHandler}
        />
        <Icon type={index} />
      </label>
    )
    )
  }

  return (
    <div className={classes.radio}>
      {items}
    </div>
  )
}

export default selector;