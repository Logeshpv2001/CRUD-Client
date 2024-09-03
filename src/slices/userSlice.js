import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      const id = action.payload.id;
      state.users = state.users.filter((u) => u.id !== id);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((x) => x.id == action.payload.id);
      state.users[index] = {
        id: action.payload.id,
        name: action.payload.name,
        address: action.payload.address,
        age: action.payload.age,
        department: action.payload.department,
        employeeStatus: action.payload.employeeStatus,
      };
    },
  },
});

export const { addUser, getUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
