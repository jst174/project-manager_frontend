import axios from "axios";

const BASE_EMPLOYEE_URL = "http://localhost:8080/api/v1/employee";

class EmployeeService {
  getEmployees() {
    return axios.get(BASE_EMPLOYEE_URL);
  }

  getEmployeeById(id) {
    return axios.get(`${BASE_EMPLOYEE_URL}/${id}`);
  }

  addEmployee(employee) {
    return axios.post(BASE_EMPLOYEE_URL, employee);
  }

  deleteEmpployee(id) {
    return axios.delete(`${BASE_EMPLOYEE_URL}/${id}`);
  }

  updateEmployee(employee) {
    return axios.put(BASE_EMPLOYEE_URL, employee);
  }
}

export default new EmployeeService();
