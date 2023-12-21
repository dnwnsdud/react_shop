import { createSlice } from "@reduxjs/toolkit";
import cartList from "./cartData";

export let cList = createSlice({
  name: "cList",
  initialState: cartList,
  reducers: {
    plusCount(prev, action) {
      let num = prev.findIndex((a) => a._id === action.payload);
      prev[num].count++;
    },
    minusCount(prev, action) {
      let num = prev.findIndex((a) => a._id === action.payload);
      prev[num].count--;
    },
    delItem(prev, action) {
      let num = prev.findIndex((a) => a._id === action.payload);
      prev.splice(num, 1);
    },
    addItem(prev, action) {
      let num = prev.findIndex((a) => a._id === action.payload._id);
      if (num === -1) prev.push(action.payload);
      else prev[num].count += action.payload.count;
    },
  },
});

export let { plusCount, minusCount, delItem, addItem } = cList.actions;
