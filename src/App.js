import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import useCustomer from "./features/customers/hooks/useCustomer";

function App() {

  const { customerName } = useCustomer();

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customerName === ""
        ? (
          <CreateCustomer />
        )
        : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )
      }
    </div>
  );
}

export default App;
