
//loading plugin
import React from "react";
import ReactDOM from "react-dom";

import $ from 'jquery';

import 'bootstrap';
import "./navbar.scss";


class Navbar extends React.Component
{
    constructor(props){
        super(props);
        this.changetype = this.changetype.bind(this)
        this.state={
            home:"Home",
            work:"Work",
            about:"About",
            navbarpadding:"30px 10px",
            menu_work_class:"nav-item",
            menu_about_class:"nav-item",
            menu_home_class:"nav-item active"
        }
    }

    changetype(event) {

        if(event.target.id==="href_work")
        {
            this.props.SetContentType_Work();
            this.setState({
                menu_work_class:"nav-item active",
                menu_about_class:"nav-item",
                menu_home_class:"nav-item"
            });
        }
        else if(event.target.id==="href_about")
        {
            this.props.SetContentType_About();
            this.setState({
                menu_work_class:"nav-item",
                menu_about_class:"nav-item active",
                menu_home_class:"nav-item"
            });
        }
        else 
        {
            this.props.SetContentType_Home();
            this.setState({
                menu_work_class:"nav-item",
                menu_about_class:"nav-item",
                menu_home_class:"nav-item active"
            })
        }
        $("#navbars").collapse("hide");
      }
   

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        let scroll = window.pageYOffset;
        if (scroll <= 0) {
            this.setState({navbarpadding: "30px 10px"});
        }
        else {
            this.setState({navbarpadding: "10px 10px"});
        }
    }

    render()
    {
        return <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-lignt fixed-top" style={{padding:this.state.navbarpadding}}>
                <div className="container">
                    <a className="navbar-brand">
                        <img alt="Rita" src="img/Icon_NavbarTitle.png" className="navbar-img"/>ita Chang
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbars">
                        <ul className="navbar-nav ml-auto">
                            <li id="nav_link_Home" className={this.state.menu_home_class}>
                                <a className="nav-link" href="#" id="href_home" onClick={this.changetype} >{this.state.home}</a>
                            </li>
                            <li id="nav_link_Work" className={this.state.menu_work_class}>
                                <a className="nav-link" href="#" id="href_work" onClick={this.changetype} >{this.state.work}</a>
                            </li>
                            <li id="nav_link_About" className={this.state.menu_about_class}>
                                <a className="nav-link" href="#"  id="href_about" onClick={this.changetype} >{this.state.about}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="file/Resume_Rita.pdf">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>;
    }

    
}

export default Navbar;