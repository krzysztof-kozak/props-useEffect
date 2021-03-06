import React, { useEffect } from "react";

const SnackBar = ({
  positionX,
  positionY,
  isVisible,
  setIsVisible,
  duration,
  backgroundColor,
  color
}) => {
  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, duration);
    }
  }, [isVisible, setIsVisible, duration]);

  return (
    <>
      <pre>
        {JSON.stringify(
          {
            isVisible,
            duration,
            positionY,
            positionX,
            backgroundColor,
            color
          },
          null,
          2
        )}
      </pre>
      <div
        className="MuiPaper-root MuiAlert-root MuiAlert-filledSuccess MuiPaper-elevation6"
        role="alert"
        style={{
          [positionX]: "3px",
          [positionY]: "3px",
          display: isVisible ? "flex" : "none",
          backgroundColor: backgroundColor,
          color: color
        }}
      >
        <div className="MuiAlert-icon">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
          </svg>
        </div>
        <div className="MuiAlert-message">This is a success message!</div>
      </div>
    </>
  );
};

export default SnackBar;
