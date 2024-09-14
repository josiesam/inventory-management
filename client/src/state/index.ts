import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateType {
  isStatebareCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: InitialStateType = {
  isStatebareCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isStatebareCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode, setIsSidebarCollapsed } = globalSlice.actions;

export default globalSlice.reducer;
