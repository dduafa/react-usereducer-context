import React, { useState } from "react";

const Play = () => {
  const [search, setSearch] = useState("");
  const [someId, setSomeId] = useState("");


  const handleSubmit = (e, id) => {
    e.preventDefault();
    console.log("something", e, id);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleItemChange = (e, id) => {
      console.log('someId', id)
      setSomeId(e.target.value)
  };

  return (
    <div>
      <h5>{search}</h5>
      <input
        type="text"
        name="iSearch"
        value={search}
        onChange={handleChange}
      />
      <input
        type="text"
        name="id"
        placeholder='Test second params of handler'
        value={someId}
        onChange={(e) => handleItemChange(e, someId)}
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default Play;
