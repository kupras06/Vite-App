import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OrderState {
  selectedDate: string;
  errorMessage: string;
  shopData: string;
}

const initialState: OrderState = {
  selectedDate: "Not Selected",
  errorMessage: "",
  shopData: ""
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    updateShopData: (state, action: PayloadAction<string>) => {
      state.shopData = action.payload;
    },
    updateErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { updateSelectedDate, updateShopData, updateErrorMessage } =
  orderSlice.actions;

export default orderSlice.reducer;
