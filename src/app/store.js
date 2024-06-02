import { combineReducers, createStore } from "redux";
import accountReducer from "../features/accounts/slices/AccountSlice";
import customerReducer from "../features/customers/slices/CustomerSlice";


const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})


//Step 3: Pass reducer function to redux store to manage it by redux
const store = createStore(rootReducer);


export default store;
