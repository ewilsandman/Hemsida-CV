import React from 'react';
import StyleApp, { Main, SubTitle, Title } from "./StyleApp";
import { ProjectData } from "./ProjectData";
import ImageApp from './ImageApp';
import { PersData } from './PersData';

export const PersApp = () => {
    return (
        <>
            <div>
                <Title id = "Personal"> Personal </Title>
                {PersData.map((data, key) => {
                    return (
                        <div key={key}>
                            <Personal
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


const Personal = ({ Name, When, Desc, Img, GitLink }) => {
    if (!Name) return <div />;
    return (
        <div>
            <SubTitle>{Name}</SubTitle>
            <Main>{When}</Main>
            <Main>{Desc}</Main>
        </div>
    );
};