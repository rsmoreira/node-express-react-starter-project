import React, { Component } from 'react'
import { connect } from 'react-redux';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class Sidenav extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            var elems = document.querySelectorAll('.sidenav')
            M.Sidenav.init(elems, {
                edge: "left",
                inDuration: 250
            })
        });

        document.addEventListener('DOMContentLoaded', () => {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {
                alignment: 'left'
            });
        });

    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default:
                return (
                <div> 
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <div>
                        
                        <ul id="slide-out" 
                            className="sidenav sidenav-fixed"
                            style={{ marginTop: '65px' }}>
                            
                            <li><a className="subheader">Protheus</a></li>
                            
                            <li><a href="#!">Update Entries</a></li>
                            <li><a href="#!">Update Invoices</a></li>
                            <li><a href="#!">Update Orders</a></li>
                            <li><a href="#!">Adjust Balance</a></li>

                            <li><a href="#!">Manage Updates</a></li>

                            <li><div className="divider"></div></li>
                            <li><a className="subheader">Human Resources</a></li>
                            <li><a href="#!">Adjust Atlassian List</a></li>

                            <li><div className="divider"></div></li>
                            <li><a className="subheader">Subheader</a></li>
                            <li><a href="#!"><i className="material-icons">cloud</i>Just a Link With Icon</a></li>
                            <li><a className="waves-effect" href="#!">Link Without Icon</a></li>    
                            
                            <li><div className="divider"></div></li>

                            <div>
                            <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

                            <ul id='dropdown1' className='dropdown-content'>
                                <li><a href="#!">one</a></li>
                                <li><a href="#!">two</a></li>
                                <li className="divider" tabIndex="-1"></li>
                                <li><a href="#!">three</a></li>
                                <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                                <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
                            </ul>
                            </div>
                        </ul>
                    </div>

                </div>);
                
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
                
           </div>
                    
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Sidenav)

