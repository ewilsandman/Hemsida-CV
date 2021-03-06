import React from 'react';
import { Main, SubTitle, Title, ProjectBox } from "./StyleApp";
import { WorkData } from "./WorkData";

export const WorkApp = () => {
    return (
        <>
            <div>
            <Title id= "Work"> Work life experience </Title>
                {WorkData.map((data, key) => {
                    return (
                        <div key={key}>
                            <Work
                                key={key}
                                Name={data.Name}
                                When={data.When}
                                Desc={data.Desc}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};


const Work = ({ Name, When, Desc, Img, GitLink }) => {
    if (!Name) return <div />;
    return (
        <ProjectBox>
            <SubTitle>{Name}</SubTitle>
            <Main>{When}</Main>
            <Main>{Desc}</Main>
        </ProjectBox>
    );
};