import { combineReducers, createStore } from "redux";

//Account

//Step: 1) create init state
const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
}

//Step: 2) Create Reducer Function - similar like useReducer
function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload
            };

        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload
            };

        case "account/requestLoan":

            if (state.loan > 0) {
                return state;
            }
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount
            };

        case "account/payLoan":

            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan
            };

        default:
            return state;

    }
}


//Customer
const initialStateCustomer = {
    fullname: "",
    nationalID: "",
    createdAt: ""
};

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":

            return {
                ...state,
                fullname: action.payload.fullname,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt,
            }

        case "customer/updateCustomerName":
            return {
                ...state,
                fullname: action.payload
            }

        default:
            return state;
    }
}

function createCustomer(fullname, nationalID) {
    return {
        type: "customer/createCustomer",
        payload: {
            fullname,
            nationalID,
            createdAt: new Date().toISOString()
        }
    };
}

function updateCustomerName(fullname) {
    return {
        type: "customer/updateCustomerName",
        payload: fullname
    };
}

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})


console.log("Hey Redux..");

//Step 3: Pass reducer function to redux store to manage it by redux
const store = createStore(rootReducer);

//Use Store to call methods
store.dispatch({ type: "account/deposit", payload: 800 });

console.log(store.getState());

store.dispatch({ type: "account/withdraw", payload: 500 });

console.log(store.getState());

store.dispatch({
    type: "account/requestLoan",
    payload: {
        amount: 2000,
        purpose: "Buy a Car."
    }
});

console.log(store.getState());

store.dispatch({
    type: "account/payLoan",
});

console.log(store.getState());


console.log("Action Creator Used Here: ");


function deposit(amount) {
    return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount = 0, purpose = "") {
    return {
        type: "account/requestLoan",
        payload: {
            amount: amount,
            purpose: purpose
        }
    };
}

function payLoan() {
    return {
        type: "account/payLoan",
    };
}


store.dispatch(deposit(400));

console.log(store.getState());

store.dispatch(withdraw(100));

console.log(store.getState());

store.dispatch(requestLoan(200, "Buy a new car.."));

console.log(store.getState());

store.dispatch(payLoan());

console.log(store.getState());


console.log("Created Customer Here --> ")

store.dispatch(createCustomer("Yaman Singh", "2334212"));

console.log(store.getState());

store.dispatch(updateCustomerName("Yaman Aswal"));

console.log(store.getState());

console.log(store.getState().customer.fullname);
console.log(store.getState().customer.nationalID);
console.log(store.getState().customer.createdAt);