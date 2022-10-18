import React from "react";
import { useState } from "react";

const BlockFilter = ({ postQuery, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;

    setSearchParams({ search: query });
  };

  return (
    <form autoComplete="off" action="" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input className="search-btn button-32" type="submit" value="Search" />
    </form>
  );
};

export default BlockFilter;
