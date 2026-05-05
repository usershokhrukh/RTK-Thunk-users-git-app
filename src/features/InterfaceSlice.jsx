import { createSlice } from "@reduxjs/toolkit";

const InterfaceSlice = createSlice({
  name: "interface",
  initialState: {
    modalAdd: false
  },
  reducers: {
    modal: (state) => {
      state.modalAdd = !state.modalAdd
    }
  }
})

export const {modal} = InterfaceSlice.actions;
export default InterfaceSlice.reducer