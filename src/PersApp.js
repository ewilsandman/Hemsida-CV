import React from 'react';
import { Main, Title, ProjectBox } from "./StyleApp";
import { PersData } from './PersData';

export const PersApp = () => {
    return (
        <>
            <div>
                <Title id = "Bio"> Bio </Title>
                {PersData.map((data, key) => {
                    return (
                        <div key={key}>
                            <Personal
                                key={key}
                                Desc={data.Desc}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};


const Personal = ({Desc}) => {
    if (!Desc) return <div />;
    return (
        <ProjectBox>
            <Main>{Desc}</Main>
        </ProjectBox>
    );
};