import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import counter_reducer from "./features/Counter_reducer"

export let store = configureStore({
    reducer: {
        counter: counter_reducer
    }
})