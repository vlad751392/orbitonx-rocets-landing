import React from "react";

interface FullSVGProps {
  name: string;
  fill?: string;
}

const FullSVG: React.FC<FullSVGProps> = ({ name, fill }) => {
  const symbolId = `#icon-svg-${name}`;
    console.log(symbolId);
    
  return (
    <svg aria-hidden="true">
      <use href={symbolId} fill={fill} />
    </svg>
  );
};

export default FullSVG;
