import React from "react";

const UsersRender = ({users, filter}) => {
  console.log(filter);

  return users?.map((item) => {
    switch (filter?.filter) {
      case "city":
        if (item?.address?.city.includes(filter?.search)) {
          return (
            <div className="main__items">
              <p className="main__text">
                <span className="main__secondary-text">name:</span> {item?.name}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">email:</span>{" "}
                {item?.email}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">phone:</span>{" "}
                {item?.phone}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">username:</span>{" "}
                {item?.username}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">website:</span>{" "}
                {item?.website}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">city:</span>{" "}
                {item?.address?.city}
              </p>
            </div>
          );
        }
        break;
      case "email":
        if (item?.email.includes(filter?.search)) {
          return (
            <div className="main__items">
              <p className="main__text">
                <span className="main__secondary-text">name:</span> {item?.name}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">email:</span>{" "}
                {item?.email}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">phone:</span>{" "}
                {item?.phone}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">username:</span>{" "}
                {item?.username}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">website:</span>{" "}
                {item?.website}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">city:</span>{" "}
                {item?.address?.city}
              </p>
            </div>
          );
        }
        break;
      case "phone":
        if (item?.phone.includes(filter?.search)) {
          return (
            <div className="main__items">
              <p className="main__text">
                <span className="main__secondary-text">name:</span> {item?.name}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">email:</span>{" "}
                {item?.email}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">phone:</span>{" "}
                {item?.phone}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">username:</span>{" "}
                {item?.username}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">website:</span>{" "}
                {item?.website}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">city:</span>{" "}
                {item?.address?.city}
              </p>
            </div>
          );
        }
        break;
      case "username":
        if (item?.usernmae.includes(filter?.search)) {
          return (
            <div className="main__items">
              <p className="main__text">
                <span className="main__secondary-text">name:</span> {item?.name}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">email:</span>{" "}
                {item?.email}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">phone:</span>{" "}
                {item?.phone}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">username:</span>{" "}
                {item?.username}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">website:</span>{" "}
                {item?.website}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">city:</span>{" "}
                {item?.address?.city}
              </p>
            </div>
          );
        }
        break;
      case "website":
        if (item?.website.includes(filter?.search)) {
          return (
            <div className="main__items">
              <p className="main__text">
                <span className="main__secondary-text">name:</span> {item?.name}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">email:</span>{" "}
                {item?.email}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">phone:</span>{" "}
                {item?.phone}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">username:</span>{" "}
                {item?.username}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">website:</span>{" "}
                {item?.website}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">city:</span>{" "}
                {item?.address?.city}
              </p>
            </div>
          );
        }
        break;
      case "name":
        if (item?.name.includes(filter?.search)) {
          return (
            <div className="main__items">
              <p className="main__text">
                <span className="main__secondary-text">name:</span> {item?.name}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">email:</span>{" "}
                {item?.email}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">phone:</span>{" "}
                {item?.phone}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">username:</span>{" "}
                {item?.username}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">website:</span>{" "}
                {item?.website}
              </p>
              <p className="main__text">
                <span className="main__secondary-text">city:</span>{" "}
                {item?.address?.city}
              </p>
            </div>
          );
        }
        break;
    }
  });
};

export default UsersRender;
