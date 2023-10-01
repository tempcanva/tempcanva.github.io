import Header from "../components/LayoutComponents/header";
import Sidebar from "../components/LayoutComponents/sidebar";

import Invoices from "./Invoices";
import Appointments from "./Appointments";
import Approvals from "./Approvals";
import Clients from "./Clients";
import Reports from "./Reports";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {  
  return (
    <div>
      <Header />
      <Router>
      <Sidebar />
        <Routes>
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
