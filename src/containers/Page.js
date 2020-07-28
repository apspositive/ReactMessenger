import React, { Component } from 'react';

import Form from '../components/form/form';
import Activity from '../components/activities/activity';


import classes from './page.module.scss';

class Page extends Component {

  state =
    {
      activities: [
        { id: 0, age: '3d', eventType: 1, who: 'You', comment: 'dummy', whoom: 'Milton Romaguera' },
        { id: 1, age: '3d', eventType: 2, who: 'You', comment: 'dummy', whoom: 'Milton Romaguera' },
        { id: 2, age: '3d', eventType: 3, who: 'You', comment: 'dummy', whoom: 'Milton Romaguera' },
        { id: 3, age: '3d', eventType: 4, who: 'You', comment: 'dummy', whoom: 'Milton Romaguera' },
        { id: 4, age: '3d', eventType: 5, who: 'You', comment: 'dummy', whoom: 'Milton Romaguera' }
      ],
      whoom: 'Milton Romaguera',
      eventType: 1,
      loading: false
    }

  getActivitiesList(list) {
    return list.map(entity =>
      <Activity key={entity.id}
        age={entity.age}
        eventType={entity.eventType}
        who={entity.who}
        whoom={entity.whoom}
      >
        {entity.comment}
      </Activity>
    )
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.activities !== this.state.activities;
  }

  componentDidMount() {
    let node = document.getElementById(this.state.eventType);

    if (node)
      node.checked = true;
  }

  typeSelectHandler(event) {
    const value = event.target.value;
    this.setState({ eventType: value });
  }

  submitButtonClickHandler(event) {

    let list = [...this.state.activities];
    const newID = list.length;
    const comment = document.getElementById('inputText').value;

    list = [{ id: newID, age: 0, eventType: this.state.eventType, who: 'You', comment: comment }, ...list];

    this.setState({ activities: list });

  }


  render() {
    const list = this.state.loading ? <p>Loading..</p> : this.getActivitiesList(this.state.activities);

    return (
      <div className={classes.main}>
        <Form
          whoom={this.state.whoom}
          submitButtonClickHandler={this.submitButtonClickHandler.bind(this)}
          typeSelectHandler={this.typeSelectHandler.bind(this)}
        />
        {list}
      </div>
    );
  }

}

export default Page;
