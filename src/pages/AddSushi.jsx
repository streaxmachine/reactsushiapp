import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addSushiStart, updateSushiStart } from "../store/actions";

const initialState = {
  type: "Nigiri",
  name: "",
  recipe: "",
};

const AddSushi = ({ setCube }) => {
  const [formValue, setValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { type, name, recipe } = formValue;
  const { id } = useParams();
  const { sushi } = useSelector((s) => s.sushiData);

  const navigate = useNavigate();
  const goBack = () => navigate("/");
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleSushi = sushi.find((item) => item.id === Number(id));
      setValue({ ...singleSushi });
    } else {
      setEditMode(false);
      setValue({ ...initialState });
    }
  }, [id, sushi]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type && name && recipe) {
      if (!editMode) {
        dispatch(addSushiStart(formValue));
        setTimeout(() => {
          goBack();
        }, 500);
      } else {
        dispatch(updateSushiStart({ id, formValue }));
        setTimeout(() => {
          goBack();
          setEditMode(false);
        }, 500);
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (e.target.name === "type") {
      setCube(value);
    }
    setValue({ ...formValue, [name]: value });
  };

  useEffect(() => {
    setCube(type);
  }, []);

  return (
    <>
      <form action="">
        <div className="form-div">
          Choose type
          <select
            style={{ marginBottom: "10px", marginTop: "10px" }}
            className="select"
            value={type}
            name="type"
            onChange={handleChange}
          >
            <option value="Nigiri">Nigiri</option>
            <option value="Uramaki">Uramaki</option>
            <option value="Gunkan maki">Gunkan maki</option>
          </select>
          <label htmlFor="name">Enter sushi name: </label>
          <input
            style={{
              marginBottom: "20px",
              border: "solid 1px white",
              borderRadius: "5px",
              height: "20px",
              marginTop: "10px",
            }}
            type="text"
            name="name"
            value={name || " "}
            required
            onChange={handleChange}
          />
          Enter recipe
          <textarea
            name="recipe"
            cols="30"
            className="recipe-textarea"
            rows="10"
            value={recipe || " "}
            onChange={handleChange}
          ></textarea>
          <input
            type="submit"
            className="button-32"
            style={{ backgroundColor: "rgb(25, 189, 25)" }}
            value={!editMode ? "Add" : "Edit"}
            onClick={handleSubmit}
          />
          <Link to={"/"}>
            <button className="button-32"> Cancel </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddSushi;
