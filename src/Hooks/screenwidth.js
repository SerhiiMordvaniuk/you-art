import { useState, useEffect } from "react";

function useDeviceType() {
  const getDeviceType = (width) => {
    if (width < 768) return "mobile";
    if (width < 1280) return "tablet";
    return "laptop";
  };

  const [deviceType, setDeviceType] = useState(
    getDeviceType(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
}

export default useDeviceType;
