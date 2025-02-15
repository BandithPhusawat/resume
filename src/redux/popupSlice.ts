import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface PopupState {
  title: string | null;
  body: ReactNode | null;
  isOpen: boolean;
}

const initialState: PopupState = {
  title: null,
  body: null,
  isOpen: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (
      state,
      action: PayloadAction<{ title: string; body: ReactNode }>
    ) => {
      state.title = action.payload.title;
      state.body = action.payload.body;
      state.isOpen = true;
    },
    closePopup: (state) => {
      state.title = null;
      state.body = null;
      state.isOpen = false;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
