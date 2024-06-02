//Customer Redux

const initialStateCustomer = {
    fullname: "",
    nationalID: "",
    createdAt: ""
};

export default function customerReducer(state = initialStateCustomer, action) {
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

export function createCustomer(fullname, nationalID) {
    return {
        type: "customer/createCustomer",
        payload: {
            fullname,
            nationalID,
            createdAt: new Date().toISOString()
        }
    };
}

export function updateCustomerName(fullname) {
    return {
        type: "customer/updateCustomerName",
        payload: fullname
    };
}
