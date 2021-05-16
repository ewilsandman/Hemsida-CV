import React from 'react';
import { Main, SubTitle, Title, Links, ProjectBox } from "./StyleApp";
import { ProjectData } from "./ProjectData";
//import ImageApp from './ImageApp';

export const ProjectApp = () => {
  return (
    <>
      <div>
        <Title id="Projects"> Projects</Title>
        {ProjectData.map((data, key) => {
          return (
            <div key={key}>
              <Project
                key={key}
                Name={data.Name}
                When={data.When}
                Desc={data.Desc}
                Img={data.Img}
                GitLink={data.GitLink}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};


const Project = ({ Name, When, Desc, Img, GitLink }) => {
  if (!Name) return <div />;
  return (
      <ProjectBox>  
        <SubTitle>{Name}</SubTitle>
        <Main>{When}</Main>
        <Main>{Desc}</Main>
        <img alt="" src={Img} />
        <Main></Main>
        <Links href={GitLink}> Link to GitHub </Links>
      </ProjectBox>
  );
};
