import React from 'react';
import ReactDOM from 'react-dom';
import {Background, Title, SubTitle, Main} from"./StyleApp";
import ImageApp from './ImageApp.js';
import './index.css';
import { ProjectApp } from './ProjectApp';
//import reportWebVitals from './reportWebVitals';


function Start(){
   return <Title>Curriculum vitae Emil Sundman</Title>
}

function GetText()
{
 const testText = ["IT", "Do", "WORKE!!"]
 return testText;
}

function GetTitle()
{
const testTitle = ["Look", "At", "This"]
return testTitle;
}

/*function Core(){
  ProjectApp();
}*/

function Footer(){
return(
<div>
<SubTitle>Contact me!</SubTitle>
<Main>infoinfoinfoinfoinfoinfoinfoinfoinfoinfo</Main>
</div>
)
}

ReactDOM.render(
<Background>
    <Start/>
      <Main>
        <ProjectApp/>
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
