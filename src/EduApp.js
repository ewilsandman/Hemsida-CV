import React from 'react';
import StyleApp, { Main, MenuStyle, SubTitle, Title } from "./StyleApp";
import { EduData } from "./EduData";
import ImageApp from './ImageApp';

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

    if (Type == "Education") {
        return (
            <div>
                <Title>{Name}</Title>
                <Main>{When}</Main>
                <Main>{Desc}</Main>
            </div>
        )
    }
    if (Type == "Course") {
        return (
            <div>
                <MenuStyle>{Name}</MenuStyle>
                <Main>{When}</Main>
                <Main>{Desc}</Main>
            </div>
        )
    }
    if (Type == "Cert") {
        return (
            <div>
                <MenuStyle>{Name}</MenuStyle>
                <Main>{When}</Main>
                <Main>{Desc}</Main>
            </div>
        )
    }

};