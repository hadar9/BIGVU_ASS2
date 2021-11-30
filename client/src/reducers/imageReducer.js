import { createSlice } from '@reduxjs/toolkit';
const initialState = { color: 'white', imageurl: null, text: null };

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    chooseColor(state, action) {
      state.color = action.payload;
      state.imageurl = null;
      state.text = null;
    },
    chooseImage(state, action) {
      state.imageurl = action.payload;
    },
    changeText(state, action) {
      state.text = action.payload;
    },
  },
});

export const imageSliceActions = imageSlice.actions;

export default imageSlice.reducer;
