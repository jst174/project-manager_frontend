import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import ClientService from "../../services/ClientService";
import EmployeeService from "../../services/EmployeeService";

const AddProject = () => {
  const [inputClientValue, setClientValue] = useState("");
  const [inputEmployeeValue, setEmployeeValue] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleInputClientChange = (value) => {
    setClientValue(value);
  };

  const handleClientChange = (value) => {
    setSelectedClient(value);
  };

  const handleInputEmployeeChange = (value) => {
    setEmployeeValue(value);
  };

  const handleEmployeeChange = (value) => {
    setSelectedEmployee(value);
  };

  const clients = async () => {
    const response = await ClientService.getClients();
    return response.data;
  };

  const employees = async () => {
    const response = await EmployeeService.getEmployees();
    return response.data;
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            style={{ marginTop: "10px" }}
            type="text"
            placeholder="Project name"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            style={{ marginTop: "10px" }}
            type="text"
            placeholder="Country"
            autoFocus
          />
          <Form.Control
            style={{ marginTop: "10px" }}
            type="text"
            placeholder="City"
            autoFocus
          />
          <Form.Control
            style={{ marginTop: "10px" }}
            type="text"
            placeholder="Street"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <AsyncSelect
            placeholder="Select client..."
            style={{ marginTop: "10px" }}
            cacheOptions
            defaultOptions
            value={selectedClient}
            getOptionLabel={(e) => e.name}
            getOptionValue={(e) => e.id}
            loadOptions={clients}
            onInputChange={handleInputClientChange}
            onChange={handleClientChange}
          />
          <AsyncSelect
            placeholder="Select project manager..."
            style={{ marginTop: "10px" }}
            cacheOptions
            defaultOptions
            value={selectedEmployee}
            getOptionLabel={(e) => e.firstName + " " + e.lastName}
            getOptionValue={(e) => e.id}
            loadOptions={employees}
            onInputChange={handleInputEmployeeChange}
            onChange={handleEmployeeChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            style={{ marginTop: "10px" }}
            type="text"
            placeholder="Image URL"
            autoFocus
          />
        </Form.Group>
      </Form>

      <div className="mb-2" style={{ marginTop: "10px" }}>
        <Button variant="primary">Save</Button>{" "}
        <Button variant="primary">Reset</Button>
      </div>
    </Container>
  );
};

export default AddProject;
