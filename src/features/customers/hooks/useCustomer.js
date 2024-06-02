import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../slices/CustomerSlice";


function useCustomer() {

    const customerName = useSelector((store) => store.customer.fullname);

    const dispatch = useDispatch();

    function createNewCustomer(fullname, nationalID) {
        dispatch(createCustomer(fullname, nationalID));
    }

    return {
        customerName,
        createNewCustomer
    }
}

export default useCustomer;
