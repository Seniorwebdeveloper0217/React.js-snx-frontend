import React, {Component} from "react";


class PoolPage extends Component {

    render() {

        return (
            <React.Fragment>
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className="col-md-6">
                        <h3>guild bank value</h3>
                        <h1>$942,973.08</h1> 
                    </div>
                    <div className="col-md-6">
                        <div className="button-bundle">
                            <div className="col-md-4 main-btn">
                                Donate
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

export default PoolPage;