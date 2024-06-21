import React from "react";

const Heder = ({ children }) => {
  return (
    <div>
      <div className="hederWrapper">
        <li className="hederList">
          <a className="hederInner" href="/">
            EVENT Registration Form
          </a>
        </li>
        <li className="hederList">
          <a className="hederInner" href="/jobform">
            {" "}
            Job Application Form
          </a>
        </li>
        <li className="hederList">
          <a className="hederInner" href="/surveyform">
            Survey Questions Form
          </a>
        </li>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Heder;
