import React from "react";
import {NAV} from '../../router/url';
import { withRouter } from "react-router";
import NavItem from "../navItem"


function FooterNav (props){
console.log(props.location.pathname);

    return (
        <nav className="navbar navbar-expand-lg justify-content-end">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false"
                    aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
            <div className="collapse navbar-collapse" id="footerNavContent">
                <ul className="navbar-nav ml-auto">
                    {
                        NAV.map((item) => (<NavItem
                                url={item.url}
                                title={item.title}
                                active={window.location.pathname === item.url}
                                key = {item.url}
                            />))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(React.memo(FooterNav));