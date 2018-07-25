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
    }

    renderContent() {
        console.log(this.props.auth);
        
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
                            
                            <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                            <li><a href="#!">Second Link</a></li>
                            
                            <li><div className="divider"></div></li>
                            <li><a className="subheader">Subheader</a></li>
                            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>    
                            
                            <li><div className="divider"></div></li>
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

