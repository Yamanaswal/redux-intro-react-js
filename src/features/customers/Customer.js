import useCustomer from "./hooks/useCustomer";

function Customer() {

  const { customerName } = useCustomer();

  return <h2>👋 Welcome, {customerName === "" ? "No User Yet! " : customerName}</h2>;
}

export default Customer;
