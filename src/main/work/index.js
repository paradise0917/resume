import React from "react";
import ReactDOM from "react-dom";

import AnimateHeight from 'react-animate-height';

import 'bootstrap';
import "./work.scss";

class WorkTitle extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            title:"Work",
            titledesc:"研究所時期開始擔任指導教授的計畫兼任助理，畢業後則在一間網管公司任職，以下是我的工作經歷與專案項目的介紹🙋‍"
        }
    }

    render()
    {
        return (
            <React.Fragment>
                <span className='font-size-title bolder'>{this.state.title}</span>
                <div className='block-main-left'>
                    <span className='font-size-content'>{this.state.titledesc}</span>
                </div><br/><br/>
            </React.Fragment>
        );
    }
    
}

class WorkExperience extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            title:"Experience"
        }
    }

    render()
    {
        return (
            <React.Fragment>
                <div className='block-main-left'>
                    <span className='font-size-title-small'>
                        <img alt='arrow-right' className='img-title' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACBSURBVEhL7dQ7CoAwEEXRbMPv/jfgMhQEC79r0ffEgRCmy0wh5MIptJgpjAmlEhtggf59cuj+XNDxhXWygE5owbR4AR3QgFnpAtqgBpO0BbRCBdlpw8UI2WmDxQTZaYPJ7Dtow3cwO0npcB5T038hHu76o7ldFbzsZnC77Eq/LoQHcOtETlFNEk4AAAAASUVORK5CYII='></img>
                        {this.state.title}
                    </span>
                </div>
                <div className="flow">
                    <ul>
                        <li className="root">
                            <div className="dot color-primary-bak"></div>
                            <div className="dot-title">
                                <span className="color-secondary bolder">e-SOFT 曜祥網技</span>
                                <span className="color-third"> ( 2015.9 - 2019.4 )</span><br/>
                                <span className="color-secondary bolder">軟體工程師 / 資深工程師 </span>
                            </div><br/>
                            <ul>
                                <li>前端架構規劃與 Coding Style 制定</li>
                                <li>參與 API 溝通格式制定與討論</li>
                                <li>前端系統開發與維護 (RWD)</li>
                                <li>系統操作流程與網頁視覺風格設計 (UI、UX)</li>
                                <li>舊系統維護與功能擴充 : 多國語言功能、儀表板設計與開發、表格凍結頂端列功能、系統風格翻新</li>
                                <li>公司部分產品 UI 設計、ICON 繪製</li>
                                <li>測試公司主線產品</li>
                                <li>協助新進同仁前端技術學習與開發</li>
                            </ul>
                        </li>
                        <li className="root">
                            <div className="dot color-primary-bak"></div>
                                <div className="dot-title">
                                    <span className="color-secondary bolder">研究所</span>
                                    <span className="color-third"> ( 2013.7 - 2015.7 )</span><br/>
                                    <span className="color-secondary bolder">計畫兼任助理</span>
                                </div><br/>
                                <ul>
                                    <li>計畫書撰寫</li>
                                    <li>協助公文流程、經費申請</li>
                                    <li>系統開發建置(HTML 5 Web App)</li>
                                    <li>維護舊有系統(ASP.NET Web Form)</li>
                                </ul>
                        </li>
                    </ul>
                </div>
                <br/><br/><hr/><br/><br/>
            </React.Fragment>
        );
    }
    
}

class WorkProject extends React.Component
{
    constructor(props){
        super(props);
        this.ShowDetail = this.ShowDetail.bind(this);
        this.state={
            title:"Project",
            buttontitle:"Detail",
            icon1:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
            icon2:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
            icon3:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
            height: 0,
            p1_heignt:0,
            p2_heignt:0,
            p3_heignt:0
        }
    }


    ShowDetail(event)
    {
        const panel=event.target.attributes.getNamedItem('data-tag').value;
        const arrowtop="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z";
        const arrotdown="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";
        let arrow;
        const { p1_heignt } = this.state;
        const { p2_heignt } = this.state;
        const { p3_heignt } = this.state;

        switch(panel)
        {
            case"1":
                {
                    this.setState({
                        icon1:this.state.p1_heignt===0 ? arrowtop:arrotdown,
                        p1_heignt: this.state.p1_heignt === 0 ? "auto" : 0
                    });
                }
                break;
            case"2":
                {
                    this.setState({
                        icon2:this.state.p2_heignt===0 ? arrowtop:arrotdown,
                        p2_heignt: this.state.p2_heignt === 0 ? "auto" : 0
                    });
                }
                break;
            case "3":
                {
                    this.setState({
                        icon3:this.state.p3_heignt===0 ? arrowtop:arrotdown,
                        p3_heignt: this.state.p3_heignt === 0 ? "auto" : 0
                    });
                }
                break;
            default:
                {
                    //Pass
                }
                break;
        }   
    }    

    render()
    {
        const { height } = this.state;

        let Img1="url(\'https://images.unsplash.com/photo-1536917570556-14ebac23ddf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1610&q=80\')";
        let Img2="url(\'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1011&q=80\')";
        let Img3="url(\'https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80\')";

        return (
            <React.Fragment>
                <div id='div_work' className='block-main'>
                    <div className="block-main-left">
                        <span className='font-size-title-small'>
                            <img alt='arrow-right' className='img-title' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACBSURBVEhL7dQ7CoAwEEXRbMPv/jfgMhQEC79r0ffEgRCmy0wh5MIptJgpjAmlEhtggf59cuj+XNDxhXWygE5owbR4AR3QgFnpAtqgBpO0BbRCBdlpw8UI2WmDxQTZaYPJ7Dtow3cwO0npcB5T038hHu76o7ldFbzsZnC77Eq/LoQHcOtETlFNEk4AAAAASUVORK5CYII='></img>
                            {this.state.title}
                        </span>
                    </div>
                    <div className='block-item'>
                        <div className='main'>
                            <div className='block-item-bg' style={{backgroundImage:Img1}}></div>
                            <div className='block-item-text font-size-title color-white bolder'>System Integration</div>
                            <div className='block-item-sub-text color-white'>規劃、設計、開發與整併多個舊有報表系統(View)</div>
                            <div className='block-item-button' data-tag="1" onClick={this.ShowDetail}>{this.state.buttontitle}
                                <svg style={{width:"24px",height:"24px", zIndex:1}}  data-tag="1" onClick={this.ShowDetail} viewBox='0 0 24 24'><path data-tag="1" onClick={this.ShowDetail} className='icon-detail' fill='#FFFFFF' d={this.state.icon1} /></svg>
                            </div>
                        </div>
                        <AnimateHeight duration={ 500 } height={ this.state.p1_heignt }>
                        <div className='detail'>
                            此專案為需整併公司舊有6個以上的產品，需涵蓋多項大功能以及大量報表，負責的項目包含 : <br/>
                            <ul>
                                <li>系統操作流程設計</li>
                                <li>網頁視覺設計</li>
                                <li>前端規格架構制定與系統開發</li>
                                <li>參與API規格制定與討論</li>
                                <li>技術文件撰寫</li>
                            </ul><br/>
                            系統使用 HTML5、CSS3、JavaScript、jQuery 與 Bootstrap 等技術完成，透過 JSON 格式與後端進行資料交換。<br/>
                            也因客戶群的關係，在開發上要注意跨瀏覽器相容性處理，另外系統同時也支援 RWD排版，並在開發過程中加入 SPA 的技術，讓使用者在操作網頁時僅局部更新，提升使用者體驗。
                        </div>
                        </AnimateHeight>
                    </div>
                    
                    <div className='block-item'>
                        <div className='main'>
                            <div className='block-item-bg' style={{backgroundImage:Img2}}></div>
                            <div className='block-item-text font-size-title color-white bolder'>System Integration</div>
                            <div className='block-item-sub-text color-white'>規劃、設計、開發與整併多個舊有報表系統(View)</div>
                            <div className='block-item-button' data-tag="2" onClick={this.ShowDetail}>{this.state.buttontitle}
                                <svg style={{width:"24px",height:"24px", zIndex:1}} data-tag="2" onClick={this.ShowDetail} viewBox='0 0 24 24'><path data-tag="1" onClick={this.ShowDetail} className='icon-detail' fill='#FFFFFF' d={this.state.icon2} /></svg>
                            </div>
                        </div>
                        <AnimateHeight duration={ 500 } height={ this.state.p2_heignt }>
                            <div className='detail'>
                                此項目為依照客戶需求進行多個舊系統功能擴充，專案主要使用 ASP.NET Web Form、C# 等技術並搭配 MSSQL 資料庫進行開發。
                                <br/>工作項目包含下列項目與其他擴充功能 : <br/>
                                <ul>
                                    <li>系統風格翻新</li>
                                    <li>多國語言功能</li>
                                    <li>儀表板設計與開發</li>
                                    <li>表格凍結頂端列</li>
                                </ul>
                            </div>
                        </AnimateHeight>
                    </div>

                    <div className='block-item'>
                        <div className='main'>
                            <div className='block-item-bg' style={{backgroundImage:Img3}}></div>
                            <div className='block-item-text font-size-title color-white bolder'>Stop TB</div>
                            <div className='block-item-sub-text color-white'>都治計畫關懷員居家訪視系統</div>
                            <div className='block-item-button' data-tag="3" onClick={this.ShowDetail}>{this.state.buttontitle}
                                <svg style={{width:"24px",height:"24px", zIndex:1}} data-tag="3" onClick={this.ShowDetail} viewBox='0 0 24 24'><path data-tag="1" onClick={this.ShowDetail} className='icon-detail' fill='#FFFFFF' d={this.state.icon3} /></svg>
                            </div>
                        </div>
                        <AnimateHeight duration={ 500 } height={ this.state.p3_heignt }>
                            <div className='detail'>
                                此項目為國科會計畫所開發的系統，與衛生福利部疾病管制署共同合作開發，主要提供送藥物給結核病患的關懷員進行居家訪視時使用。
                                <br/>前端的部分以 HTML5 搭配 jQuery Mobile 開發，並利用 Offline Web Applications 技術支援離線功能，透過 Web Services 將資料以 XML 的格式進行溝通(後端由疾病管制署提供)。
                                <br/><br/>
                                系統適用於各種裝置與作業系統，只需透過 Google Chrome 瀏覽器即可連線使用，系統於104/06/01全台正式上線使用。  
                            </div>
                        </AnimateHeight>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    
}

function Work()
{
    return <div><WorkTitle/><WorkExperience/><WorkProject/></div>;
}

export default Work;