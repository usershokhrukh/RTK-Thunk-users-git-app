import React from 'react'

const UsersRender = ({users}) => {
  console.log(users);
  return (
    users?.map(item => (
      <div>
        <p>name: {item?.name}</p>
        <p>email: {item?.email}</p>
        <p>phone: {item?.phone}</p>
        <p>username: {item?.username}</p>
        <p>website: {item?.website}</p>
        <p>city: {item?.address?.city}</p>
      </div>
    ))
  )
}

export default UsersRender