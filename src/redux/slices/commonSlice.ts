import { createSlice } from '@reduxjs/toolkit'

export type InitialState = {
    name: string
}

const initialState: InitialState = {
    name: 'string'
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setName(state, action) {
            state.name = action.payload
        },
    },
})

export const { setName } = commonSlice.actions
export default commonSlice.reducer