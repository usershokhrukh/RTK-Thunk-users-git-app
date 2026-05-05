import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { act } from "react";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await request.json();
  return data;
});
export const postUser = createAsyncThunk("postUser", async (data) => {
  const request = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  const response = await request.json();
  return response;
})
const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: false,
    error: null,
    postError: null,
    postLoading: false,
    postData: []
  },

  reducers: {
    checkData: (state) => {
      state.data = JSON.parse(localStorage.getItem("users"));      
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
      localStorage.setItem("users", JSON.stringify(action.payload))
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.error = "Xatolik yuz berdi!";
    });

    // postUser

    builder.addCase(postUser.pending, (state) => {
      state.postLoading = true;
      state.postError = null;
    })

    builder.addCase(postUser.fulfilled, (state, actions) => {
      state.postError = null;
      state.postLoading = false;
      if(actions.payload?.name) {
        state.data.push(actions.payload);
        localStorage.setItem("users", JSON.stringify(state.data))
      }            
    })

    builder.addCase(postUser.rejected, (state, action) => {
      state.postError = action.error.message;
      state.postLoading= false
    })
  },
});

export const {checkData} = UserSlice.actions
export default UserSlice.reducer;
