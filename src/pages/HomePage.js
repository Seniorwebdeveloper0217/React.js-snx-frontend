import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HomePage extends Component {
  
  render() {
    return(
        <React.Fragment>
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className="col-md-6">
                        <h3>guild bank value</h3>
                        <h1>$942,973.08</h1> 
                        <h3>MOLOCH POOL VALUE</h3>
                        <h2>$548.19</h2>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <Link to="/members" className="main-btn">Members</Link>
                            </div>
                            <div className="col-md-4 align-middle">
                                <Link to="/proposals" className="main-btn">Proposals</Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/pool" className="main-btn">Pool</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row stat-banner'>
                    <div className='col-md-4'>
                        <h1>6998</h1>
                        <h3>Total shares</h3>
                    </div>
                    <div className='col-md-4'>
                        <h1>5608</h1>
                        <h3>Total Eth</h3>
                    </div>
                    <div className='col-md-4'>
                        <h1>$134.75</h1>
                        <h3>Share Value</h3>
                    </div>
                </div>
            </div>    
        </React.Fragment>
      )

  }

}

export default HomePage;