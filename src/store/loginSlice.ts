import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
    userName: string
}

const initialState: LoginState = {
    userName: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state, action) {

        }
    }
})

export const{ login } = loginSlice.actions
export default loginSlice.reducer