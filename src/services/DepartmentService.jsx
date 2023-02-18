import axios from "axios";

const BASE_DEPARTMENT_URL = "http://localhost:8080/api/v1/departments";

class DepartmentService {
  getDepartments() {
    return axios.get(BASE_DEPARTMENT_URL);
  }

  addDepartment(department) {
    return axios.post(BASE_DEPARTMENT_URL, department);
  }

  deleteDepartment(id) {
    return axios.delete(`${BASE_DEPARTMENT_URL}/${id}`);
  }

  getDepartmentById(id) {
    return axios.get(`${BASE_DEPARTMENT_URL}/${id}`);
  }

  updateDepartment(department) {
    return axios.put(BASE_DEPARTMENT_URL, department);
  }
}

export default new DepartmentService();
