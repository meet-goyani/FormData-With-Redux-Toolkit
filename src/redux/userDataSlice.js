import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [
    {
      id: 1,
      name: "user",
      email: "user@gmail.com",
      date: "2021-11-3",
      gender: "male",
      hobbies: ["Reading, Speaking"],
    },
  ],
};
export const userDataSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const addUser = {
        id: Math.random(),
        name: action.payload.name,
        email: action.payload.email,
        date: action.payload.date,
        gender: action.payload.gender,
        hobbies: action.payload.hobbies,
      };
      state.userData.push(addUser);
    },

    deleteUser: (state, action) => {
      state.userData = state.userData.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});

export const { addUser, deleteUser } = userDataSlice.actions;
export default userDataSlice.reducer;
