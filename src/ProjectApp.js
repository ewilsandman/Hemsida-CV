import React from 'react';
import StyleApp from "./StyleApp";
import {ProjectData} from "./ProjectData";
import ImageApp from './ImageApp';

export const ProjectApp = () => {
    return (
      <>
        <div>
          {ProjectData.map((data, key) => {
            return (
              <div key={key}>
                <Project
                key ={key}
                Name ={data.Name}
                When ={data.When}
                Desc ={data.Desc}
                Img ={data.Img}
                GitLink ={data.GitLink}
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
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{Name}</h5>
            </td>
            <td>
              <h5>{When}</h5>
            </td>
            <td>
              <h4>{Desc}</h4>
            </td>
            <td>
              <img src = {Img}/>
            </td>
            <td>
              <p>{GitLink}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
