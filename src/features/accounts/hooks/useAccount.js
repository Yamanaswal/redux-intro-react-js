import { useDispatch, useSelector } from "react-redux";
import { deposit, depositConvertThunks, payLoan, requestLoan, withdraw } from "../slices/AccountSlice";


function useAccount() {

    const dispatch = useDispatch();

    const account = useSelector((store) => {
        return store.account;
    });

    function depositMoney(amount, currency) {
        console.log("depositMoney: ", amount, currency);

        if (currency === "USD") {
            dispatch(deposit(amount));
        } else {
            //convert to USD, then update balance 
            dispatch(depositConvertThunks(amount, currency));
        }
    }

    function withdrawalMoney(amount) {
        dispatch(withdraw(amount));
    }

    function requestLoanMoney(amount, purpose) {
        dispatch(requestLoan(amount, purpose));
    }

    function payLoanMoney() {
        dispatch(payLoan());
    }

    return {
        account,
        depositMoney,
        withdrawalMoney,
        requestLoanMoney,
        payLoanMoney
    }
}

export default useAccount;


