import React, { useState } from "react";
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

const Preloader = () => {
  const { active, progress } = useProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(active);
    if (active === false) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [active]);

  return (
    <>
      {loading ? (
        <div className="loader-container-starter">
          <div className="spinner"></div>
        </div>
      ) : null}
    </>
  );
};
export default Preloader;
