import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const singleSushi = {
  type: "",
  name: "",
  recipe: "",
};

const AboutSushi = () => {
  const [sushiValue, setValue] = useState(singleSushi);
  const { id } = useParams();
  const { sushi } = useSelector((s) => s.sushiData);
  const { type, name, recipe } = sushiValue;
  const navigate = useNavigate();

  useEffect(() => {
    const currentSushi = sushi.find((item) => item.id === Number(id));
    setValue({ ...currentSushi });
  }, [id]);

  return (
    <>
      <button
        className="btn-about-sushi button-32"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      <ul className="about-sushi">
        <li className="about-sushi-text">type: {type}</li>
        <li className="about-sushi-text">name: {name}</li>
        <li className="about-sushi-text">recipe: {recipe}</li>
      </ul>
    </>
  );
};

export default AboutSushi;
