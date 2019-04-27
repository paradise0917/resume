import React from "react";
import ReactDOM from "react-dom";

import { Typing } from 'react-typing';
import "./home.scss";


class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            button_state:"hidden",
            button_opacity:"0"
        }
    }

    ShowBtn()
    {
        this.setState({
            button_state:"visible",
            button_opacity:"1"
        })
    }

    render()
    {
        let button_state={ visibility:this.state.button_state, opacity: this.state.button_opacity};

        return (
            <React.Fragment>
                <div className="div-home"> 
                    <div className="div-home-content">
                        <span className="name">
                            <Typing delay="2000" keyDelay={100} onDone={this.ShowBtn.bind(this)} >
                                <span className="size_title">Hello, Im' Rita.</span><br/>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>
                                <span className="size_desc">I'm a software engineer. This is my online portfolio.&nbsp;&nbsp;:&nbsp;)</span><br/>
                            </Typing>
                        </span>
                        <div className="btn" style={button_state}>
                            <a className="href-work" onClick={this.props.SetContentType_Work}>&nbsp;→&nbsp;&nbsp;Know more about my experience</a><br/><br/><br/>
                            <div>
                                <a href="mailto:paradise0917@gmail.com" target="_blank"><img src="img/email.png"></img></a>                   
                            </div>
                            <div>
                                <a href="https://facebook.com/haoyiii.chang" target="_blank"><img src="img/facebook-box.png"></img></a>
                            </div>
                        </div>
                    </div>
                    <div className="triangle1_outer"></div>
                    {/* <div className="triangle2_outer"></div> */}
                    {/* <div className="triangle3_outer"></div> */}
                    <div className="triangle4_outer"></div>
                </div>
            </React.Fragment>
        );
    }
    
}


export default Home;