import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';
//import reportWebVitals from './reportWebVitals';

const Background = styled.body`
  background: black;
  padding 0px;
  margin: 0px;
  width: auto;
  height: 2000px;
  color: white
`;

const Title = styled.h1`
  padding 75px;
  margin: 0px;
  font-size: 2em;
  text-align: center;
  color: white;
  background: grey;
  text-shadow: 0 0 6px green, 0 0 10px lightgreen;
`;

const SubTitle = styled.h2`
font-size: 1.5em;
background: darkgrey;
`

const Main = styled.text`
text-align: center;
font-size: 1em;
padding 0px;
margin: 0px;
color: white;
text-shadow: 0 0 6px green, 0 0 10px lightgreen;
`;
function Start(){
   return <Title>Curriculum vitae Emil Sundman</Title>
}

function GetText()
{
 const testText = ["IT", "DO", "WORKE!!"]
 return testText;
}

function GetTitle()
{
const testTitle = ["Look", "At", "This"]
return testTitle;
}

function Core(){
  var Titles = GetTitle();
  var Texts = GetText();
  const CoreDone = []
  for (let index = 0; index < Titles.length; index++) 
  {
    const localTitle = Titles[index];
    const localText = Texts[index]; 
    CoreDone.push(
    <div>
    <SubTitle>{localTitle}</SubTitle>
    <Main>{localText}</Main>
    </div>)
  }
  return (CoreDone);
}

function Footer(){
return null
}

ReactDOM.render(
<Background>
    <Start/>
      <Main>
        <Core/>
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
