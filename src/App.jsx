import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './features/UsersSlice';

const App = () => {
  const user = useSelector((state) => state)
  console.log(user);
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>App</div>
  )
}

export default App