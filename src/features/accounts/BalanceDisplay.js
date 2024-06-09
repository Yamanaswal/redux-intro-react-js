import useAccount from "./hooks/useAccount";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}



function BalanceDisplay() {

  const { account } = useAccount();

  return <div className="balance">{formatCurrency(account.balance)}</div>;
}

export default BalanceDisplay;
