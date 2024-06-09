//Account Redux

import { createSlice } from "@reduxjs/toolkit";


//Step: 1) create init state
const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false
}


const accountSlice = createSlice({
    //reducer name - account
    name: "account",

    //init state
    initialState: initialStateAccount,

    //Create Reducer Function and actions
    reducers: {
        deposit: {
            reducer(state, action) {
                state.balance = state.balance + action.payload;
                state.isLoading = false;
            }
        },
        depositConvertThunks: {
            reducer(state, action) {
                state.balance = state.balance + action.payload;
                state.isLoading = false;
            }
        },
        withdraw: {
            reducer(state, action) {
                state.balance = state.balance - action.payload
            }
        },
        requestLoan: {
            prepare(amount, purpose) {
                return {
                    payload: {
                        amount, purpose
                    }
                };
            },
            reducer(state, action) {

                if (state.loan > 0) {
                    return;
                }

                state.loan = action.payload.amount;
                state.loanPurpose = action.payload.purpose;
                state.balance = state.balance + action.payload.amount;
            }
        },
        payLoan: {
            reducer(state, action) {
                state.balance = state.balance - state.loan;
                state.loan = 0;
                state.loanPurpose = "";
            }
        },
        convertingCurrency: {
            reducer(state, action) {
                state.isLoading = true;
            }
        }
    }
});


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


console.log(accountSlice);

export const {
    deposit,
    withdraw,
    payLoan,
    requestLoan
} = accountSlice.actions;

export default accountSlice.reducer;



