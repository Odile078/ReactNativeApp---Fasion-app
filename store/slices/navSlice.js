import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//initial state
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};
//slice
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelInformation } =
  navSlice.actions;
//Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
