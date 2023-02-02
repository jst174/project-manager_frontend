import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpployeeItemList from "./components/employeeEntity/EmployeeItemList";
import ProjectsList from "./components/projectEntity/ProjectsList";
import ClientList from "./components/clientEntity/ClientList";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import AddClient from "./components/clientEntity/AddClient";
import AddProject from "./components/projectEntity/AddProject";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ProjectsList />} />
            <Route path="new" element={<AddProject />} />
            <Route path="employees" element={<EmpployeeItemList />} />
            <Route path="clients" element={<ClientList />} />
            <Route path="clients/new" element={<AddClient />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
