import React from 'react';
import { Main, SubTitle, Title, ProjectBox } from "./StyleApp";
import { EduData } from "./EduData";

export const EduApp = () => {
    return (
        <>
            <div>
           <Title id= "Educations"> Education </Title>
                {EduData.map((data, key) => {
                    return (
                        <div key={key}>
                            <Educate
                                key={key}
                                Type={data.Type}
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


const Educate = ({ Type, Name, When, Desc }) => {
    if (!Name) return <div />;

    if (Type === "Education") {
        return (
            <ProjectBox>
                <SubTitle>{Name}</SubTitle>
                <Main>{When}</Main>
                <Main>{Desc}</Main>
            </ProjectBox>
        )
    }
    if (Type === "Course") {
        return (
            <div>
                <SubTitle>{Name}</SubTitle>
                <Main>{When}</Main>
                <Main>{Desc}</Main>
            </div>
        )
    }
    if (Type === "Cert") {
        return (
            <ProjectBox>
                <SubTitle>{Name}</SubTitle>
                <Main>{When}</Main>
                <Main>{Desc}</Main>
            </ProjectBox>
        )
    }

};