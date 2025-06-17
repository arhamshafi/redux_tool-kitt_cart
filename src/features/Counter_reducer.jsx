import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    value: 0
}

let counter_reducer = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value = state.value > 0 ? state.value - 1 : state.value
        }
    }
})

export let { increment, decrement } = counter_reducer.actions
export default counter_reducer.reducer