import React from "react";
import {Link} from "react-router-dom";

function NavItem ({ activ, url, title }) {
    return (
        <li className={`nav-item ${activ ? 'active' : ''}`}>
        {/*<li className={`nav-item ${props.location.pathname === item.url ? 'active' : ''}`} key={item.url}>*/}
            <Link className="nav-link" to={url}>{title}</Link>
        </li>
    )
}

export default React.memo(NavItem);