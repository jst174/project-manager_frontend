import { Container, Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import EmployeeService from "../../services/EmployeeService";
import EmployeeItem from "./EmployeeItem";
import NewEmployee from "./NewEmployee";
import EditEmployee from "./EditEmployee";

function EmpployeeItemList() {
  const [employees, setEmployees] = useState([]);
  const [newEmployeeActive, setNewEmployeeActive] = useState(false);
  const [editEmployeeActive, setEditEmployeeActive] = useState(false);
  const [editEmployee, setEditEmployee] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [employees]);

  const addEmployee = async (employee) => {
    await EmployeeService.addEmployee(employee)
      .then((response) => {
        employee.id = response.data.id;
        setEmployees([...employees, employee]);
        setNewEmployeeActive(false);
      })
      .catch((error) => console.log(error));
  };

  const deleteEmployeeHandler = async (id) => {
    await EmployeeService.deleteEmpployee(id).then((res) => {
      if (employees) {
        setEmployees((newEmlp) =>
          newEmlp.filter((employee) => employee.id !== id)
        );
      }
      console.log(employees);
    });
  };

  const editEmployeeHandler = async (employee) => {
    await EmployeeService.updateEmployee(employee)
      .then((response) => {
        setEditEmployeeActive(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Button
        onClick={() => setNewEmployeeActive(true)}
        className="d-md-flex mt-3 mb-3"
        as="input"
        type="submit"
        value="Add new employee"
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Job title</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <EmployeeItem
                key={employee.id}
                employee={employee}
                deleteEmployee={deleteEmployeeHandler}
                editEmployee={setEditEmployee}
                setActive={setEditEmployeeActive}
              />
            );
          })}
        </tbody>
      </Table>
      <NewEmployee
        addEmployee={addEmployee}
        active={newEmployeeActive}
        setActive={setNewEmployeeActive}
      />
      <EditEmployee
        active={editEmployeeActive}
        setActive={setEditEmployeeActive}
        employee={editEmployee}
        editEmployeeHandler={editEmployeeHandler}
      />
    </Container>
  );
}

export default EmpployeeItemList;
