import React, { memo } from "react";

const UsersRender = ({users, filter}) => {
  return users?.map((item) => {
    switch (filter?.filter.toLowerCase()) {
      case "":
        return (
          <div className="main__items">
            <p className="main__text">
              <span className="main__secondary-text">name:</span> {item?.name}
            </p>
            <p className="main__text">
              <span className="main__secondary-text">email:</span> {item?.email}
            </p>
            <p className="main__text">
              <span className="main__secondary-text">phone:</span> {item?.phone}
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
        break;
      case "city":
        if (item?.address?.city.toLowerCase().includes(filter?.search.toLowerCase())) {
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
        if (item?.email.toLowerCase().includes(filter?.search.toLowerCase())) {
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
        if (item?.phone.toLowerCase().includes(filter?.search.toLowerCase())) {
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
        if (item?.username.toLowerCase().includes(filter?.search.toLowerCase())) {
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
        if (item?.website.toLowerCase().includes(filter?.search.toLowerCase())) {
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
        if (item?.name.toLowerCase().includes(filter?.search.toLowerCase())) {
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

export default memo(UsersRender);
