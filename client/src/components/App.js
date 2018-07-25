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
    
    resize = () => {
        console.log(window.width);
        document.getElementById("main_div").style.paddingLeft = "50px";
    }
    
    componentDidMount() {
        this.props.fetchUser();
        window.addEventListener('resize', this.resize)
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

export default connect(null, actions)(App);