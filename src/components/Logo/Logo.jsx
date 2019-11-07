import React from "react";

import Tilt from "react-tilt";

//-- Styles --//
import "./Logo.css";

//-- Logo --//
import brain from "./brain.png";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner tc">
          <img style={{ paddingTop: "25px" }} src={brain} alt="brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
