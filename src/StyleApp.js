import styled from 'styled-components';

const Background = styled.div`
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
  /* text-shadow: 0 0 6px green, 0 0 10px lightgreen; */
  text-decoration: underline;
`;

const SubTitle = styled.h2`
font-size: 1.5em;
text-align: center;
color: white;
/* text-shadow: 0 0 6px green, 0 0 10px lightgreen; */
text-decoration: none;
`

const Links = styled.a`
color: lightgreen;
text-decoration: none; /* no underline */

`

const MenuStyle = styled.ol`
color: green;
list-style-type: none;   
padding: 0;   
margin: 0; 
`

const ProjectBox = styled.div`
margin: auto;
margin-top: 20px;
margin-bottom: 20px;
width: 50%;
height: auto;
Border: 2px solid white; 
position: relative;
padding: 20px;
`

const Main = styled.div`
text-align: center;
font-size: 1em;
padding 0px;
margin: 0px;
color: white;
text-decoration: none;
/* text-shadow: 0 0 6px green, 0 0 10px lightgreen; */
`;
export { Background, Title, SubTitle, Main, MenuStyle, Links, ProjectBox };