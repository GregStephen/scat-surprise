import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import ScatCard from '../ScatCard/ScatCard';
import scatData from '../../helpers/data/scatData';

class Home extends React.Component {
  state = {
    scats: [],
  }

  editEvent = (e) => {
    e.preventDefault();
    const orderId = '54321';
    this.props.history.push(`/edit/${orderId}`);
  }

  getScats = () => {
    const userId = firebase.auth().currentUser.uid;
    scatData.getScat(userId)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error('cant get scat', err));
  }

  componentDidMount() {
    this.getScats();
  }

  deleteScat = (scatId) => {
    scatData.deleteScatFromTheDatabase(scatId)
      .then(() => this.getScats())
      .catch(err => console.error('can not delete shit', err));
  }

  render() {
    const singleLink = '/scat/12345';
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard key={ scat.id } scat={ scat } deleteScat={ this.deleteScat }/>
    ));

    return (
      <div className="Home col">
        <h1>SURPRISE IT'S SCAT LOL</h1>
        <div className="d-flex">
            { makeScatCards }
        </div>
        <button className="btn btn-success" onClick={this.editEvent}>Edit a thing</button>
        <Link to={singleLink}>View Single</Link>
      </div>
    );
  }
}

export default Home;
