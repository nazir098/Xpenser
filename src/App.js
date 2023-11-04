import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home";
import React from "react";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home></Home>} />
        <Route path="/add-expense" element={<AddExpense></AddExpense>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
