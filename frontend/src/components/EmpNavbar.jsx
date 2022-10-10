import { NavLink } from 'react-router-dom';
import "./style.css"

function EmpNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white position ml-3 mr-3 mt-5 box" id="sticky">
            <div className="container-fluid">
                <a className="navbar-brand nav-item1"><strong>HI,EMPLOYEE</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-auto " id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <NavLink className="nav-link nav-item navbar-shadow" to="/emp/home"><strong>HOME</strong></NavLink>
                        <NavLink className="nav-link nav-item navbar-shadow" to="/emp/addemp"><strong>ADD EMPLOYEE</strong></NavLink>
                        <NavLink className="nav-link nav-item navbar-shadow" ><strong>logout</strong></NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default EmpNavbar;