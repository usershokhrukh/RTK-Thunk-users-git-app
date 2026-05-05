import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkData, fetchUsers, postUser} from "./features/UsersSlice";
import UsersRender from "./components/UsersRender";
import "./assets/style.scss";
import {modal} from "./features/InterfaceSlice";

const App = () => {
  const {data, loading, error, postData, postError, postLoading} = useSelector(
    (state) => state.user,
  );
  const {modalAdd} = useSelector((state) => state.interface);
  const [input, setInput] = useState({
    search: "",
    filter: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem("users")) {
      dispatch(checkData())
    }else{
      dispatch(fetchUsers())
    }
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value.trim().toLowerCase().startsWith("city:")) {
      const valueSearch = value.replace("city:", "").trim();
      setInput({
        ...input,
        filter: "city",
        search: valueSearch,
      });
    } else if (value.trim().toLowerCase().startsWith("name:")) {
      const valueSearch = value.replace("name:", "").trim();
      setInput({
        ...input,
        filter: "name",
        search: valueSearch,
      });
    } else if (value.trim().toLowerCase().startsWith("email:")) {
      const valueSearch = value.replace("email:", "").trim();

      setInput({
        ...input,
        filter: "email",
        search: valueSearch,
      });
    } else if (value.trim().toLowerCase().startsWith("phone:")) {
      const valueSearch = value.replace("phone:", "").trim();

      setInput({
        ...input,
        filter: "phone",
        search: valueSearch,
      });
    } else if (value.trim().toLowerCase().startsWith("website:")) {
      const valueSearch = value.replace("website:", "").trim();

      setInput({
        ...input,
        filter: "website",
        search: valueSearch,
      });
    } else if (value.trim().toLowerCase().startsWith("username:")) {
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

  const [addInput, setAddInput] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    website: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !addInput.name ||
      !addInput.email ||
      !addInput.phone ||
      !addInput.username ||
      !addInput.website ||
      !addInput.city
    ) {
      return;
    }
    dispatch(postUser());
    dispatch(postUser(addInput));
    dispatch(modal());
  };

  const handleAddInput = (e) => {
    setAddInput({
      ...addInput,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <div className="main">
      <h2 className="main__loading">{loading ? "Loading..." : null}</h2>
      {error ? <h2 className="main__error">{error}</h2> : null}
      <div className="main__card-w">
        <form onSubmit={(e) => e.preventDefault()} className="main__form">
          <input
            onChange={handleSearch}
            type="text"
            className="main__input"
            placeholder="city: South Elvis"
          />
          <button onClick={() => dispatch(modal())} className="main__add-user">
            + add user
          </button>
        </form>
        <div className="main__card">
          <UsersRender users={data} filter={input} />
        </div>
      </div>
      {modalAdd ? (
        <div className="main__modal">
          <form onSubmit={handleSubmit} className="main__modal-form">
            <input
              onChange={handleAddInput}
              className="main__input"
              type="text"
              name="name"
              placeholder="name"
            />
            <input
              onChange={handleAddInput}
              className="main__input"
              type="text"
              name="email"
              placeholder="email"
            />
            <input
              onChange={handleAddInput}
              className="main__input"
              type="text"
              name="phone"
              placeholder="phone"
            />
            <input
              onChange={handleAddInput}
              className="main__input"
              type="text"
              name="username"
              placeholder="username"
            />
            <input
              onChange={handleAddInput}
              className="main__input"
              type="text"
              name="website"
              placeholder="website"
            />
            <input
              onChange={handleAddInput}
              className="main__input"
              type="text"
              name="city"
              placeholder="city"
            />
            <button className="main__add-user" type="submit">
              add
            </button>
            <button
              className="main__add-user"
              onClick={() => dispatch(modal())}
            >
              close
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default App;
