import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./features/UsersSlice";
import UsersRender from "./components/UsersRender";
import "./assets/style.scss";

const App = () => {
  const {data, loading, error} = useSelector((state) => state.user);
  const [input, setInput] = useState({
    search: "",
    filter: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value.trim().startsWith("city:")) {
      const valueSearch = value.replace("city:", "").trim();
      setInput({
        ...input,
        filter: "city",
        search: valueSearch,
      });
    } else if (value.trim().startsWith("name:")) {
      const valueSearch = value.replace("name:", "").trim();
      setInput({
        ...input,
        filter: "name",
        search: valueSearch,
      });
    } else if (value.trim().startsWith("email:")) {
      const valueSearch = value.replace("email:", "").trim();

      setInput({
        ...input,
        filter: "email",
        search: valueSearch,
      });
    } else if (value.trim().startsWith("phone:")) {
      const valueSearch = value.replace("phone:", "").trim();

      setInput({
        ...input,
        filter: "phone",
        search: valueSearch,
      });
    } else if (value.trim().startsWith("website:")) {
      const valueSearch = value.replace("website:", "").trim();

      setInput({
        ...input,
        filter: "website",
        search: valueSearch,
      });
    } else if (value.trim().startsWith("username:")) {
      const valueSearch = value.replace("username:", "").trim();

      setInput({
        ...input,
        filter: "username",
        search: valueSearch,
      });
    } else {
      setInput({
        ...input,
        search: value,
        filter: "",
      });
    }
  };

  return (
    <div className="main">
      <h2 className="main__loading">{loading ? "Loading..." : null}</h2>
      {error ? <h2 className="main__error">{error}</h2> : null}
      <div className="main__card-w">
        <form className="main__form">
          <input
            onChange={handleSearch}
            type="text"
            className="main__input"
            placeholder="city: South Elvis"
          />
        </form>
        <div className="main__card">
          <UsersRender users={data} filter={input} />
        </div>
      </div>
    </div>
  );
};

export default App;
