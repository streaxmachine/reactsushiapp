import React from "react";
import { useDispatch } from "react-redux";
import { deleteSushiStart, getSushiId, showSushiInfo } from "../store/actions";

const SushiItem = (props) => {
  const {
    name,
    type,
    recipe,
    setCube = Function.prototype,
    id,
    children,
  } = props;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteSushiStart(id));
  };

  const handleClick = (id) => {
    dispatch(getSushiId(id));
    dispatch(showSushiInfo(true));
  };

  return (
    <>
      <span className="li-span" onMouseEnter={() => setCube(type)}>
        <div className="span-items">
          <ul className="span-items-list">
            <li>Type: {type}</li>
            <li>Name: {name}</li>
            <li className="span-items-list-recipe">Recipe: {recipe}</li>
          </ul>
          <div className="span-items-btn">
            {children}
            <button className="button-37" onClick={() => handleClick(id)}>
              check
            </button>
            <button className="button-24" onClick={() => handleDelete(id)}>
              delete
            </button>
          </div>
        </div>
      </span>
    </>
  );
};

export default SushiItem;
