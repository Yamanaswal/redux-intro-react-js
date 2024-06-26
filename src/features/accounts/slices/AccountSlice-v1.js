//Account Redux

//Step: 1) create init state
const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false
}

//Step: 2) Create Reducer Function - similar like useReducer
export default function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload,
                isLoading: false
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

        case "account/convertingCurrency":

            return {
                ...state,
                isLoading: true
            };

        default:
            return state;

    }
}

/* Action Creators */
export function deposit(amount) {
    return { type: "account/deposit", payload: amount };
}

export function depositConvertThunks(amount, currency) {

    //thunks
    return async function (dispatch, getState) {
        //loading api
        dispatch({ type: "account/convertingCurrency" })

        //Api Call
        const host = 'api.frankfurter.app';
        const response = await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`)
        const data = await response.json();
        console.log(data);
        const convertAmount = data.rates.USD;

        //return action
        dispatch({
            type: "account/deposit",
            payload: convertAmount
        });
    }
}

export function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount = 0, purpose = "") {
    return {
        type: "account/requestLoan",
        payload: {
            amount: amount,
            purpose: purpose
        }
    };
}

export function payLoan() {
    return {
        type: "account/payLoan",
    };
}


