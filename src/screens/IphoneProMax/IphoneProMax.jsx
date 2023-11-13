import React from "react";
import "./style.css";
import angieValen from "../../../static/Invitation-figma2.png";

export const IphoneProMax = () => {
  return (
    <div className="iphone-pro-max">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="invitation-figma"
            alt="Angie Valen"
            src={angieValen}
          />
          <div className="button-parroquia">
            <a href="https://maps.app.goo.gl/HMLMjjS96yk1GvPb8" target="_blank" rel="noopener noreferrer">
              <div className="overlap-group">
                <div className="rectangle" />
                <p className="text-wrapper">
                  11:30 | Parroquia inmaculada concepción: José cubas 3599
                </p>
              </div>
            </a>
          </div>
          <div className="overlap-group-wrapper">
            <a href="https://maps.app.goo.gl/fDmbJ7k7h2hZT9iM9" target="_blank" rel="noopener noreferrer">
              <div className="div">

                <div className="rectangle-2" />
                <p className="p">13:00 | Festejo en Tamarindo: campana 1747</p>
              </div>
            </a>
          </div>

        </div>
        <a href="https://forms.gle/eThDd2oJ2tjMoqT68" target="_blank" rel="noopener noreferrer">
          <div className="asistencia">
            Confirmar asistencia
          </div>
        </a>
      </div>
    </div>
  );
};
