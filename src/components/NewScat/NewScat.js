import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import scatData from '../../helpers/data/scatData';

import './NewScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: '',
  animal: '',
};

class NewScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newScat };
    saveMe.uid = firebase.auth().currentUser.uid;
    scatData.postScat(saveMe)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  formFieldStringState = (e) => {
    const tempScat = { ...this.state.newScat };
    tempScat[e.target.id] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  render() {
    const { newScat } = this.state;
    return (
      <div className="NewScat col-8">
        <h1>New Scat</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="sampleName">Sample Name</label>
            <input
            type="text"
            className="form-control"
            id="sampleName"
            value={newScat.sampleName}
            onChange={this.formFieldStringState}
            placeholder="Sample 12"
            required/>
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
            type="text"
            className="form-control"
            id="color"
            value={newScat.color}
            onChange={this.formFieldStringState}
            placeholder="Brown"
            required/>
          </div>
          <div className="form-group">
            <label htmlFor="animal">Animal</label>
            <input
            type="text"
            className="form-control"
            id="animal"
            value={newScat.animal}
            onChange={this.formFieldStringState}
            placeholder="Cat"
            required/>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input
            type="text"
            className="form-control"
            id="weight"
            value={newScat.weight}
            onChange={this.formFieldStringState}
            placeholder="10G"
            required/>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
            type="text"
            className="form-control"
            id="location"
            value={newScat.location}
            onChange={this.formFieldStringState}
            placeholder="Outside"
            required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewScat;
