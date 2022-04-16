import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserData = {
  loggedIn: boolean;
};
type UserAuthData = {
  accessToken: string;
  tokenType: string;
  userId: string;
  isLoggedIn: boolean;
};
export interface OrderState {
  selectedDate: string;
  errorMessage: string;
  userData: UserData;
  userAuthData: UserAuthData;
}

const initialState: OrderState = {
  selectedDate: "Not Selected",
  errorMessage: "",
  userData: {
    loggedIn: false
  },
  userAuthData: {
    accessToken: "",
    tokenType: "",
    userId: "",
    isLoggedIn: false
  }
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    updateUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    updateErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    updateUserAuthData: (state, action: PayloadAction<UserAuthData>) => {
      state.userAuthData = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  updateSelectedDate,
  updateUserData,
  updateErrorMessage,
  updateUserAuthData
} = orderSlice.actions;

export default orderSlice.reducer;
