import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await request.json();
  return data;
});

const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.error = "Xatolik yuz berdi!";
    });
  },
});

export default UserSlice.reducer;
