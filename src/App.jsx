import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseForm from "./assets/components/ExpenseForm";
import ExpenseTable from "./assets/components/ExpenseTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
         <ExpenseForm />
         <ExpenseTable />
          
          <div className="context-menu">
            <div>Edit</div>
            <div>Delete</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
