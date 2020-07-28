import React, { Fragment } from 'react';

import eventTypes from '../../../dataSources/eventTypes';
import './icons.scss';

const icon = (props) => {
  return (
    <Fragment>
      {eventTypes[props.type].icon}
    </Fragment>
  )
}

export default icon