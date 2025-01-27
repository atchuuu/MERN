import React, { forwardRef } from "react";

const ChildButton = forwardRef(({ children, onClick }, ref) => {
  return (
    <div>
      <button ref={ref} onClick={onClick}>
        {children}
      </button>
    </div>
  );
});

export default ChildButton;
