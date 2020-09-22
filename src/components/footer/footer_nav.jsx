import React from "react";
import {NAV} from '../../router/url';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";


function FooterNav (props){
console.log(props.location.pathname);

    function renderNavItem (item) {

        return (
            <li className={`nav-item ${props.location.pathname === item.url ? 'active' : ''}`} key={item.url}>
                <Link className="nav-link" to={item.url}>{item.title}</Link>
            </li>
        )
    }
    return (
        <nav className="navbar navbar-expand-lg justify-content-end">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false"
                    aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
            <div className="collapse navbar-collapse" id="footerNavContent">
                <ul className="navbar-nav ml-auto">
                    {
                        NAV.map(renderNavItem)
                    }
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(React.memo(FooterNav));