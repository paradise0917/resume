
//引入NPM 管理的套件
import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap';
import "./style.scss";
import Navbar from "./navbar/navbar.js";
import Main from "./main/index.js";


class Root extends React.Component
{    
    constructor(props)
    {
        super(props);
        this.state={
            displayType:"home"
        }
    }

    render()
    {
        return (
            <div className="root-bg">
                <Navbar SetContentType_Work={this.SetContentType_Work.bind(this)} SetContentType_About={this.SetContentType_About.bind(this)} SetContentType_Home={this.SetContentType_Home.bind(this)} />
                    <div>
                        <Main type={this.state.displayType} SetContentType_Work={this.SetContentType_Work.bind(this)}/>
                    </div>
            </div>
        );
    }

    SetContentType_Work(event)
    {
        this.setState({displayType:"work"});
    }

    SetContentType_About(event)
    {
        this.setState({displayType:"about"}) 
    }

    SetContentType_Home(event)
    {
        this.setState({displayType:"home"}) 
    }
}

// function Root()
// {
//     return <div><Navbar/><div id="div_content" className="container"><Main/></div></div>;
// }



ReactDOM.render(<Root/>,document.getElementById("div_main"));