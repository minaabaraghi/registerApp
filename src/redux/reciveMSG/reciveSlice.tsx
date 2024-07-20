import {createSlice} from '@reduxjs/toolkit';

interface reciveMsg {
    msg: string[];
}

const initialState: reciveMsg = {
    msg: [''],
};

export const msgSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        msgAction: (state: any, action: any) => {
            const {msg} = action.payload;
            state.msg = msg;
        },
    },
});

// this is for dispatch
export const {msgAction}: any = msgSlice.actions;

// this is for configureStore
export default msgSlice.reducer;
