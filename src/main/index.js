//loading plugin
import React from "react";
import ReactDOM from "react-dom";

import Home from "./home/index.js";
import About from "./about/index.js";
import Work from "./work/index.js";

import "./main.scss";


class Main extends React.Component
{    
    render()
    {
        const MainType = this.props.type;
        let main;

        switch(this.props.type)
        {
            case "work":
                {
                    main = <div id="div_content" className="container"><Work /></div>;
                }
                break;
            case "about":
                {
                    main = <div id="div_content" className="container"><About /></div>;
                }
                break;
            default:
                {
                    main = <Home SetContentType_Work={this.props.SetContentType_Work.bind(this)} />;
                }
                break;
        }

        return (
            main
        );
    }
    
}

export default Main;