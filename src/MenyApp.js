import React from 'react';
import { MenyData } from './MenyData';
import { MenuStyle, Links } from "./StyleApp";

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
                <li><Links href={res} >{Name}</Links></li>
            </div>

        );
    }
};
