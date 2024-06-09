import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "../features/accounts/slices/AccountSlice";
import customerReducer from "../features/customers/slices/CustomerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";


const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})


//Step 3: Pass reducer function to redux store to manage it by redux
// Also added redux dev tools
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;
