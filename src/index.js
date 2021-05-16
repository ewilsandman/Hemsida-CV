import React from 'react';
import ReactDOM from 'react-dom';
import {Background, Title, Main, ProjectBox} from"./StyleApp";
//import ImageApp from './ImageApp.js';
import './index.css';
import { ProjectApp } from './ProjectApp';
import { MenyApp } from './MenyApp';
import { EduApp } from './EduApp';
import {WorkApp} from './WorkApp';
import {PersApp} from './PersApp';
import {ParticleAppObject } from './ParticleApp'
//import reportWebVitals from './reportWebVitals';

function Start(){
   return <Title id="Main" >Curriculum vitae Emil Sundman</Title>
}

function Footer(){
return(
<div>
<Title id= "Contact">Contact me!</Title>
<ProjectBox>
  <Main>infoinfoinfoinfoinfoinfoinfoinfoinfoinfo</Main>
  </ProjectBox>
</div>
)
}

ReactDOM.render(
<Background>
  <ParticleAppObject/>
    <Start/>
      <Main>
        <MenyApp/>
        <PersApp/>
        <ProjectApp/>
        <EduApp/>
        <WorkApp/>
      </Main>
    <Footer/>
</Background>,
document.getElementById('root'),
);

// ReactDOM.render(test2, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
