import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showSushiInfo } from "../store/actions";

const initialState = {
  type: "",
  name: "",
  recipe: "",
};

const Test = () => {
  const { sushi } = useSelector((s) => s.sushiData);
  const { id } = useSelector((s) => s.sushiId);
  const { show } = useSelector((s) => s.sushiShow);
  const dispatch = useDispatch();

  const [sushiValue, setSushiValue] = useState(initialState);
  const { name, type, recipe } = sushiValue;

  useEffect(() => {
    if (show) {
      const singleSushi = sushi.find((item) => item.id === id);
      setSushiValue({ ...singleSushi });
    }
  }, [show]);

  return (
    <>
      {show ? (
        <div className="loader-container-starter5">
          <>
            <div className="sushi-info-wrapper">
              <div className="sushi-info-container">
                <ul className="sushi-info-list">
                  <li className="sushi-info-item">Type: {type}</li>
                  <li className="sushi-info-item">Name: {name}</li>
                  <li className="sushi-info-item">Recipe: {recipe}</li>
                </ul>
                <div className="sushi-info-btn ">
                  <button
                    className="button-32"
                    onClick={() => {
                      dispatch(showSushiInfo(false));
                    }}
                  >
                    close
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      ) : null}
    </>
  );
};

export default Test;
