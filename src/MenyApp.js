import React from 'react';
import { MenyData } from './MenyData';
import StyleApp, { SubTitle, Title, MenuStyle } from "./StyleApp";

export const MenyApp = () => {
    return (
        <>
            <MenuStyle>
                {MenyData.map((data, key) => {
                    return (
                        <div key={key}>
                            <Meny
                                key={key}
                                Name={data.Name}
                            />
                        </div>
                    );
                })}
            </MenuStyle>
        </>
    );
};


const Meny = ({ Name }) => {
    if (!Name) {
        return <div />;
    }
    else {
        var anchorStr ="#";
        var nameStr = Name;
        var res = anchorStr.concat(nameStr);
        return (
            <div>
                <li><a href={res} >{Name}</a></li>
            </div>

        );
    }
};
