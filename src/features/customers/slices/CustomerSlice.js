//Customer Redux
import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
    fullname: "",
    nationalID: "",
    createdAt: ""
};

const customerSlice = createSlice({
    //reducer name - customer
    name: "customer",

    initialState: initialStateCustomer,

    reducers: {
        createCustomer: {
            prepare(fullname, nationalID) {
                return {
                    payload: {
                        fullname,
                        nationalID,
                        createdAt: new Date().toISOString()
                    }
                }
            },
            reducer(state, action) {
                state.fullname = action.payload.fullname;
                state.nationalID = action.payload.nationalID;
                state.createdAt = action.payload.createdAt;
            }
        },
        updateCustomerName: {
            reducer(state, action) {
                state.fullname = action.payload;
            }
        }
    }
})

export const {
    createCustomer,
    updateCustomerName
} = customerSlice.actions;

export default customerSlice.reducer;
