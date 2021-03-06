import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }
    
    render() {
        return(
            <nav>
                <div className="nav-wrapper" style={{ backgroundColor: '#00418C' }}>
                    
                    <ul id="nav-mobile" className="left">
                        <li>
                        <Link 
                            to={this.props.auth ? "/dashboard" : "/"}
                            className="left brand-logo"
                            style={{ paddingLeft: '10px', width: '230px' }}
                        >
                            Logo
                            
                        </Link>
                        </li> 
                        <li>
                            
                        </li>
                    </ul>
                    
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                    </ul>
                
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);