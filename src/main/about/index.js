import React from "react";
import ReactDOM from "react-dom";

import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap';
import "./about.scss";

class AboutMe extends React.Component
{
    render()
    {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-xl-6 col-12 block-item-img'>
                        <img src='IMG/Rita.JPG' alt='' className='img-about' />
                    </div>
                    <div className='col-xl-6 col-12 block-item-img-text'>
                        <span className='font-size-title'>Hi! I’m Rita.</span><br/>
                        <span className='font-size-content'>我是一位注重使用者體驗與視覺感受的軟體工程師，喜歡學習新的知識與技術，享受將美好事物透過技術實現的過程。</span>
                        <br/><br/>
                        <span className='font-size-content'>
                            第一份工作任職於一間網管公司，畢業於國立臺北護理健康大學的資管研究所、銘傳大學的醫療資訊與管理學系。從大學時期開始接觸到程式設計後，就被程式可以帶來的成就感與好處深深吸引，
                            讓我決定往這條路繼續前進，也基於這樣的經歷，讓我擁有醫療與網管跨領域的基礎知識。
                        </span>
                        <br/><br/>
                        <span className='font-size-content'>在閒暇之餘也喜歡撰寫一些小程式與網頁，幫助家人在工作上減少大量的時間；設計與撰寫動態的網頁賀卡給老師與朋友，期望能透過自己小小的力量，帶給身旁的人溫暖與快樂 🌞</span>
                    </div>
                </div>
                <br/><br/><hr/><br/><br/>
            </React.Fragment>
        );
    }
    
}

class AboutLifeTitle extends React.Component
{
    render()
    {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-xl-12 col-12 block-item-img-text'>
                        <div className='block-main-left'>
                            <span className='font-size-title-small'>More About Me</span>
                        </div>
                        <span className='font-size-content'>我喜歡聽音樂🎧、彈鋼琴🎹、練字✍、畫畫🎨、游泳🏊‍以及與小動物🐰🐱🐶相處，勇於嘗試新事物。
                        <br/>攝影📸則是一直努力在學習的事!
                        </span>
                    </div>
                </div>
                <br/><br/>
            </React.Fragment>
        );
    }
    
}

class AboutLifeImg extends React.Component
{

    render() {
        let settings = {
            className: "center",
            arrows:false,
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            centerMode:true,
            centerPadding: "70px",
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    centerMode:true,
                    centerPadding: "70px",
                    dots: true
                  }
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode:true,
                    centerPadding: "70px",
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "60px",
                  }
                },
                {
                  breakpoint: 320,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "10px",
                    dots: false
                  }
                }
              ]
        };
        
        const elements = ['1', '2', '3','4', '5', '6','7', '8', '9','10'];
        const items = []
      
        for (const [index, value] of elements.entries()) {
            let imgsrc="IMG/Life_"+value+".JPG";
          items.push(<div key={index} ><img alt='life' className='img-life' src={imgsrc} /></div>);
        }
      
        return (
        <React.Fragment>
            <Slider {...settings}>
            {items} 
            </Slider>
            <br/><br/>
          </React.Fragment>
        )
      }
}



function About()
{
    return <div><AboutMe/><AboutLifeTitle/><AboutLifeImg/><br/><br/></div>;
}

export default About;