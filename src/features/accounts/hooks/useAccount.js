import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "../slices/AccountSlice";


function useAccount() {

    const dispatch = useDispatch();

    const account = useSelector((store) => {
        return store.account;
    });

    function depositMoney(amount) {
        dispatch(deposit(amount));
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


