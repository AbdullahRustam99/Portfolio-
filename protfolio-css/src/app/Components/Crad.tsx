import React from "react";

const Crad = ( {text,dir} :any) => {
  return (
    <div className="centered-section">
      <h2 className="section-title">{text }</h2>
      <p className="section-content">{ dir}</p>
    </div>
  );
};

export default Crad;
