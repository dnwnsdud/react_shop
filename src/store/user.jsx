import { createSlice } from "@reduxjs/toolkit";

export let user = createSlice({
  name: "user",
  initialState: { id: "wjy", name: "준영", rating: 27 },
  reducers: {
    changeName(prev) {
      //   return { id: "wjy", name: "최고의 고객 준영님", age: 2 };
      prev.name = "최고의 고객 준영님";
    },
    changeRate(prev,action) {
      prev.rating = action.payload;
    },
  },
});

export let { changeName,changeRate } = user.actions;
