import React from "react";
import useAuthValues from "../hooks/useAuth";

const HomePage = () => {
  const { state, dispatch } = useAuthValues();

  return (
    <div className="container">
      {state.isAuthenticated ? (
        <div>Welcome!!!</div>
      ) : (
        <div>Not Authenticated!!!</div>
      )}
    </div>
  );
};

export default HomePage;
