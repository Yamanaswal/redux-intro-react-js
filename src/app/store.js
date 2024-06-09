import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../features/accounts/slices/AccountSlice";
import customerReducer from "../features/customers/slices/CustomerSlice";

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    }
})


export default store;
