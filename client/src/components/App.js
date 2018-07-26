import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import AuthFailed from './AuthFailed';
import Sidenav from './Sidenav';

const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
    
    adjustMainDivPaddingLeft = () => {
        if (window.innerWidth > 992 && this.props.auth) {
            document.getElementById("main_div").style.paddingLeft = "330px";
        } else {
            document.getElementById("main_div").style.paddingLeft = "30px";
        }
    }
    
    resize = () => {
        this.adjustMainDivPaddingLeft();
    }
    
    componentDidMount() {
        this.props.fetchUser();
        window.addEventListener('resize', this.resize)
        this.adjustMainDivPaddingLeft();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    render() {
        return (
            <div >
                <BrowserRouter>
                    <div>
                        <Header />
                        
                        <div id="main_div" style={{ paddingLeft: '330px' }}>
                            
                            <Route exact path="/" component={ Landing } />
                            <Route exact path="/dashboard" component={ Dashboard } />
                            <Route exact path="/authfailed" component={ AuthFailed } />
                        </div>
                        
                        <Sidenav />
                        
                    </div>
                </BrowserRouter>
            </div>
        );
    }

}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(App);