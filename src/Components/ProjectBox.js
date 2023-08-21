import React from 'react';
import {FaGithub} from "react-icons/fa";

const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    FoodCirclesDesc : "Designed and developed Food Circles, a dynamic web application using ReactJS, Redux Toolkit, and Material UI. Integrated with the Swiggy API, enabling users to effortlessly explore and orderfrom a wide range ofrestaurants. Implemented responsive design and ensured optimal user experience.",
    FoodCirclesGithub : "https://github.com/amirali72/FoodCircles",

    myWeatherDesc : "Implemented using ReactJS and the OpenWeather API, myWeather app delivers an efficient and reliable platform for users to stay informed about weather conditions anywhere in the world. Whetherit’s for personal use or planning outdoor activities, this website offers a seamless experience with its intuitive design and real-time weather updates.",
    myWeatherGithub : "https://github.com/amirali72/myWeather",

    iBlogDesc:"Engineered a cutting-edge blog app from scratch, synergizing ReactJS forimmersive frontend, NodeJS ExpressJS forrobust backend, and MongoDB for dynamic data storage. Implemented user authentication forfortified security. Crafted a fluid user experience through responsive design and RESTful API integration, showcasing adept full-stack proficiency and innovation.",
    iBlogGithub : "https://github.com/amirali72/iBlog-MERN-main",

    MetricConversionDesc:"Ditch the complexity with our bespoke metric conversion app, meticulously coded in HTML, CSS, and JS. Effortlessly switch between units for length, weight, volume, and beyond. No more conversion chaos - just sleek design and fluid functionality. Your ultimate toolkit for transforming metrics, setting new standards in user-centric conversion experiences.",
    MetricConversionGithub : "https://amirali72.github.io/MetricConverter.github.io/",

    CalculatorDesc:"Experience seamless and efficient calculations with my HTML, CSS, and JS-powered calculator app. Its user-friendly interface ensures smooth interactions, while its responsive design adapts to various devices. Perform basic to complex computations effortlessly, making it your go-to tool for everyday math tasks. Simplify your calculations with style and ease.",
    CalculatorGithub : "https://amirali72.github.io/Calculator.github.io/",

    GroceteriaDesc:"Discover a seamless grocery shopping experience at our website created with HTML, CSS, and JS. Explore a wide selection of fresh produce, pantry essentials, and more. Enjoy user-friendly navigation, dynamic features, and responsive design that make filling your cart and checking out a breeze. Your one-stop online grocery destination!",
    GroceteriaGithub : "https://amirali72.github.io/groceteria.github.io/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div className='mediaFont'>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']}>
              <button className='projectbtn'><FaGithub/> Show Project</button>
            </a>      
        </div>
    </div>
  )
}

export default  ProjectBox