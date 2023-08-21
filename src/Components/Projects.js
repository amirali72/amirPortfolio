import React from 'react';
import ProjectBox from './ProjectBox';
import foodCirclesImg from '../images/foodcircles.png';
import metric from '../images/Metric.png';
import iBlog from '../images/iBlog-cover.png';
import myWeather from '../images/mWeather.png';
import calculator from '../images/calculator.png';
import grocery from '../images/grocery.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={iBlog} projectName="iBlog" />
        <ProjectBox projectPhoto={foodCirclesImg} projectName="FoodCircles" />
        <ProjectBox projectPhoto={myWeather} projectName="myWeather" />
        <ProjectBox projectPhoto={metric} projectName="MetricConversion" />
        <ProjectBox projectPhoto={calculator} projectName="Calculator" />
        <ProjectBox projectPhoto={grocery} projectName="Groceteria" />
      </div>

    </div>
  )
}

export default Projects