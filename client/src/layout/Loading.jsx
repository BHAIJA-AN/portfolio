import React from "react";
import { Audio } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="blur">
      <div className="loader">
        <Audio
          height="100"
          width="100"
          radius="10"
          color="#AAFCEE"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
        <h3>Loading...</h3>
      </div>
    </div>
  );
};

export default Loading;
