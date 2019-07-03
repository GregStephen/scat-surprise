import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '54321';
    this.props.history.push(`/edit/${orderId}`);
  }

  render() {
    const singleLink = '/scat/12345';
    return (
      <div>
        <h1>SURPRISE IT'S SCAT LOL</h1>
        <button className="btn btn-success" onClick={this.editEvent}>Edit a thing</button>
        <Link to={singleLink}>View Single</Link>
      </div>
    );
  }
}

export default Home;
