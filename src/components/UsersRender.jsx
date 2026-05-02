import React from 'react'

const UsersRender = ({users}) => {
  return (
    users?.map(item => (
      <div className='main__items'>
        <p className='main__text'><span className='main__secondary-text'>name:</span> {item?.name}</p>
        <p className='main__text'><span className='main__secondary-text'>email:</span> {item?.email}</p>
        <p className='main__text'><span className='main__secondary-text'>phone:</span> {item?.phone}</p>
        <p className='main__text'><span className='main__secondary-text'>username:</span> {item?.username}</p>
        <p className='main__text'><span className='main__secondary-text'>website:</span> {item?.website}</p>
        <p className='main__text'><span className='main__secondary-text'>city:</span> {item?.address?.city}</p>
      </div>
    ))
  )
}

export default UsersRender