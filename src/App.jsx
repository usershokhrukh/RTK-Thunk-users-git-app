import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./features/UsersSlice";
import UsersRender from "./components/UsersRender";

const App = () => {
  const {data, loading, error} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>{loading ? "Loading..." : null}</h2>
      <h2>{error ? `${error}` : null}</h2>

      <div>
        <UsersRender users={data}/>
      </div>
    </div>
  );
};

export default App;
