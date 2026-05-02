import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./features/UsersSlice";
import UsersRender from "./components/UsersRender";
import "./assets/style.scss";

const App = () => {
  const {data, loading, error} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="main">
      <h2 className="main__loading">{loading ? "Loading..." : null}</h2>
      {error ? <h2 className="main__error">{error}</h2> : null}
      <div className="main__card">
        <UsersRender users={data} />
      </div>
    </div>
  );
};

export default App;
