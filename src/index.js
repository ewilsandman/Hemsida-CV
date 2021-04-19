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
  padding 0px;
  margin: 0px;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function Hmm(){
  array.forEach(element => {
    
  });
  return <Title>OwO</Title>;      
}

function Ono(){
  return <Title>Whats this?</Title>;
}
 
//const test2 = React.createElement(Background, null, 'This be a test');

ReactDOM.render(
<Background>
    <Hmm/>
    <Ono/>
</Background>,
document.getElementById('root'),
);

// ReactDOM.render(test2, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
