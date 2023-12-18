import React, { useEffect, useRef } from "react";

export const useBeforeLeave = (onBefore) => {
  const element = useRef();

  const handle = () => {
    onBefore();
  };

  useEffect(() => {
    if (!onBefore || typeof onBefore !== "function") return;
    element.current.addEventListener("mouseleave", handle);
    return () => {
      if (!element.current) return;
      element.current.removeEventListener("mouseleave", handle);
    };
  }, []);

  return element;
};
