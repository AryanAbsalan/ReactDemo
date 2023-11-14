import Header from "./components/Header";
import HeadlessUI from "./components/HeadlessUI";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header className="App">
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/definition" element={<Definition />} />
          <Route path="/definition/:search" element={<Definition />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/headlessui" element={<HeadlessUI />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
