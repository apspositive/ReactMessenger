import React, { Component } from 'react';

import Form from '../components/form/form';
import Activity from '../components/activities/activity';
import adapter from '../database/adapter';


import classes from './page.module.scss';

class Page extends Component {

  state =
    {
      activities: [], // Here is the main data stored

      whoom: 'Milton Romaguera',
      eventType: 1,
      saving: false,
      loading: false
    }

  // convert array to template backwards order
  getActivitiesList(list) {
    return list.slice(0).reverse().map((entity, index) =>
      <Activity isSaving={this.state.saving && index === 0} key={entity.id}
        age={entity.age}
        eventType={entity.eventType}
        who={entity.who}
        whoom={entity.whoom}
      >
        {entity.comment}
      </Activity>
    )
  }

  // Don't update DOM on any reason, just if data was changed
  shouldComponentUpdate(nextProps) {
    return nextProps.activities !== this.state.activities;
  }

  componentDidMount() {
    // check the default radio button (icon)
    let node = document.getElementById(this.state.eventType);

    if (node)
      node.checked = true;

    // adjust the state 
    this.setState({ loading: true });

    // Then load data from DB
    adapter.get('/posts.json')
      .then(result => {
        this.setState({ activities: Object.values(result.data), loading: false }) // Success, fetch data and finish loading state
      })
      .catch(error => {
        console.log(error); this.setState({ loading: false }); // log error and set app state to loaded
      })
  }

  typeSelectHandler(event) {
    const value = event.target.value;
    this.setState({ eventType: value });
  }

  submitButtonClickHandler(event) {
    if (!this.state.saving) {
      let list = [...this.state.activities];
      const newID = list.length;
      const comment = document.getElementById('inputText').value;

      const timestamp = Date.now();

      const dataSet = { id: newID, age: timestamp, eventType: this.state.eventType, who: 'You', comment: comment, whoom: this.state.whoom };

      list.push(dataSet);

      this.setState({ activities: list, saving: true });

      adapter.post('/posts.json', dataSet)
        .then(response => { this.setState({ saving: false }) })
        .catch(error => { console.log(error) });
    }

  }


  render() {
    //  let's check if we have any data or loading
    const list = this.state.loading ? <p>Loading..</p> : (Array.isArray(this.state.activities) && this.state.activities.length > 0) ? this.getActivitiesList(this.state.activities) : null;

    return (
      <div className={classes.main}>
        <Form
          blocked={this.state.loading||this.state.saving}
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
