import React from 'react';
import RentalCard from '../components/rental/RentalCard';
import { connect } from 'react-redux';
import { fetchRentals } from '../actions';

class RentalHome extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderHero = (r) => {
    let rentals = r.slice(3, 6);
    return rentals.map((rental) => (
      <div key={rental._id} className='col-md-4'>
        <RentalCard rental={rental} />
      </div>
    ));
  };

  renderRentals = (r) => {
    let rentals = r.slice(0, 3);
    return rentals.map((rental) => (
      <div key={rental._id} className='col-md-4'>
        <RentalCard rental={rental} />
      </div>
    ));
  };

  render() {
    const { rentals } = this.props;

    return (
      <div className='card-list'>
        <h2 className='page-title'>NEW LISTINGS</h2>
        <div className='row'>{this.renderHero(rentals)}</div>
        <h2 className='page-title'>POPULAR RENTALS</h2>
        <div className='row'>{this.renderRentals(rentals)}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ rentals }) => {
  return {
    rentals: rentals.items,
  };
};

export default connect(mapStateToProps)(RentalHome);
