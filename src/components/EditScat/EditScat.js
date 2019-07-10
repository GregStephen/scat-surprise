import React from 'react';

import scatData from '../../helpers/data/scatData';

import './EditScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: '',
  animal: '',
  uid: '',
};

class EditScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ newScat: scatPromise.data }))
      .catch(err => console.error('unable to get single scat', err));
  }

  formSubmit = (e) => {
    e.preventDefault();
    const scatId = this.props.match.params.id;
    const saveMe = { ...this.state.newScat };
    scatData.putScat(saveMe, scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to edit', err));
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
        <h1>Edit Scat</h1>
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

export default EditScat;
