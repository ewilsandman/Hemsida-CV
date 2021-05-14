import React from 'react';
import styled from 'styled-components';

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
text-align: center;
color: white;
background: grey;
text-shadow: 0 0 6px green, 0 0 10px lightgreen;
`

const Main = styled.text`
text-align: center;
font-size: 1em;
padding 0px;
margin: 0px;
color: white;
text-shadow: 0 0 6px green, 0 0 10px lightgreen;
`;
export{Background, Title, SubTitle, Main};