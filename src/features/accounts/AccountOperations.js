import { useState } from "react";
import useAccount from "./hooks/useAccount";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const { depositMoney, withdrawalMoney, requestLoanMoney, payLoanMoney, account } = useAccount();

  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    isLoading
  } = account;

  function handleDeposit() {
    if (!depositAmount) {
      alert("Please enter deposit amount.");
      return;
    }
    depositMoney(depositAmount, currency);
    setDepositAmount("");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) {
      alert("Please enter withdrawal amount.");
      return;
    }
    withdrawalMoney(depositAmount);
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) {
      alert("Please enter loan amount.");
      return;
    }

    requestLoanMoney(loanAmount, loanPurpose);
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    payLoanMoney();
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>


          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? "Converting..." : `Deposit ${depositAmount}`}
          </button>

        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {currentLoan > 0 &&
          (
            <div>
              <span>Pay back ${currentLoan} ({currentLoanPurpose})</span>
              <button onClick={handlePayLoan}>Pay loan</button>
            </div>
          )
        }

      </div>
    </div>
  );
}

export default AccountOperations;
