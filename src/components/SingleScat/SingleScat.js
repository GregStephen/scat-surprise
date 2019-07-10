import React from 'react';
import { Link } from 'react-router-dom';
import scatData from '../../helpers/data/scatData';

import './SingleScat.scss';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error('unable to get single scat', err));
  }

  deleteScat = () => {
    const scatId = this.props.match.params.id;
    scatData.deleteScatFromTheDatabase(scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('can not delete shit', err));
  }

  render() {
    const { scat } = this.state;
    const editLink = `/edit/${this.props.match.params.id}`;
    return (
      <div className="SingleScat">
        <h1>{scat.sampleName}</h1>
        <h2>Location: {scat.location}</h2>
        <h3>Source: {scat.animal}</h3>
        <h3>Color: {scat.color}</h3>
        <h3>Weight: {scat.weight}</h3>
        <button className="btn btn-danger" onClick={this.deleteScat}>Delete</button>
        <Link className="btn btn-info" to={editLink}>Edit</Link>
      </div>
    );
  }
}

export default SingleScat;
