import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeList from "../../pages/EmployeeList/EmployeeList";
import Home from "../../pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
