import AddExpenses from "./components/AddExpenses";
import Budget from "./components/Budget";
import ExpensesList from "./components/ExpensesList";
import ExpensesTotal from "./components/ExpensesTotal";
import Remaining from "./components/Remaining";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
    <div className="container">
      <h1 className="mt-3">
        My Bugdet Planner
      </h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget/>
        </div>
        <div className="col-sm">
          <Remaining/>
        </div>
        <div className="col-sm">
        <ExpensesTotal/>
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt3">
        <div className="col-sm">
      <ExpensesList/>
        </div>
        </div>
        <h3 className="mt-3">Add Expenses</h3>
        <div className="mt-3">
        <div className="col-sm">
          <AddExpenses/>
        </div>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
