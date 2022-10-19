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

  const [nameError, setNameError] = useState("поле не может быть пустым");
  const [recipeError, setRecipeError] = useState("поле не может быть пустым");
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();
  const goBack = () => navigate("/");
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      setRecipeError("");
      setNameError("");
      const singleSushi = sushi.find((item) => item.id === Number(id));
      setValue({ ...singleSushi });
    } else {
      setEditMode(false);
      setValue({ ...initialState });
    }
  }, [id, sushi]);

  useEffect(() => {
    console.log(nameError, recipeError);

    if (nameError || recipeError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }

    if (editMode) {
      if (nameError || recipeError) {
        setFormValid(false);
      } else {
        setFormValid(true);
      }
    }
  }, [nameError, recipeError]);

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

  const handleRecipeChange = (e) => {
    const { name, value } = e.target;

    if (name === "recipe" && value.length < 15) {
      setRecipeError("Рецепт должен содержать более 15 символов");
      if (!value) {
        setRecipeError("Не может быть пустым");
      }
    } else {
      setRecipeError("");
    }

    setValue({ ...formValue, [name]: value });
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && value.length <= 3) {
      setNameError("Название суши должно содержать более 3 символов");
      if (!value) {
        setNameError("Не может быть пустым");
      }
    } else {
      setNameError("");
    }

    setValue({ ...formValue, [name]: value });
  };

  const handleTypeChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (e.target.name === "type") {
      setCube(value);
    }
    setValue({ ...formValue, [name]: value });
  };

  const blurHandler = (e) => {};
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
            onChange={handleTypeChange}
          >
            <option value="Nigiri">Nigiri</option>
            <option value="Uramaki">Uramaki</option>
            <option value="Gunkan maki">Gunkan maki</option>
          </select>
          <label htmlFor="name">Enter sushi name: </label>
          {<div className="error-text">{nameError}</div>}
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
            value={name || ""}
            required
            onChange={handleNameChange}
            onBlur={(e) => blurHandler(e)}
          />
          Enter recipe
          <textarea
            name="recipe"
            cols="30"
            className="recipe-textarea"
            rows="10"
            value={recipe || ""}
            onChange={handleRecipeChange}
            onBlur={(e) => blurHandler(e)}
          ></textarea>
          {<div className="error-text">{recipeError}</div>}
          <input
            type="submit"
            className="button-32"
            style={{ backgroundColor: "rgb(25, 189, 25)" }}
            value={!editMode ? "Add" : "Edit"}
            disabled={!formValid}
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
