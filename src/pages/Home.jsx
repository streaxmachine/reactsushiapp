import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadSushiStart } from "../store/actions";
import SushiItem from "../components/SushiItem";
import SushiList from "../components/SushiList";
import { Link, useSearchParams } from "react-router-dom";
import BlockFilter from "../components/BlockFilter";

const Home = ({ setCube }) => {
  const dispatch = useDispatch();
  const { sushi, loading } = useSelector((s) => s.sushiData);
  const [searchParams, setSearchParams] = useSearchParams();

  const postsQuery = searchParams.get("search") || "";

  useEffect(() => {
    dispatch(loadSushiStart());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Link to={`/addSushi`}>
        <button className="btn">addSushi</button>
      </Link>
      <BlockFilter postQuery={postsQuery} setSearchParams={setSearchParams} />

      <SushiList>
        {sushi &&
          sushi
            .filter(
              (sushiItem) =>
                sushiItem.type
                  .toLowerCase()
                  .includes(postsQuery.toLowerCase()) ||
                sushiItem.name.toLowerCase().includes(postsQuery.toLowerCase())
            )
            .map((item, index) => (
              <SushiItem
                key={index}
                name={item.name}
                type={item.type}
                recipe={item.recipe}
                id={item.id}
                setCube={setCube}
              >
                <Link to={`/editSushi/${item.id}`}>
                  <button className="button-37">edit</button>
                </Link>
                <Link to={`/aboutSushi/${item.id}`}>
                  <button className="button-37">fullInfo</button>
                </Link>
              </SushiItem>
            ))}
      </SushiList>
    </>
  );
};

export default Home;
