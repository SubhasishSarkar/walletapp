import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'light',
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        changeMode: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light'
        },
        detectMode: (state) => {
            if (
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            ) {
                state.value = 'dark'
            } else {
                state.value = 'light'
            }
        },
        setMode: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeMode, detectMode, setMode } = modeSlice.actions

export default modeSlice.reducer
