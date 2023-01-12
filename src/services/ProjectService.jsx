import axios from "axios";

const BASE_PROJECT_URL = "http://localhost:8080/api/v1/projects";

class ProjectService {
  getProjects() {
    return axios.get(BASE_PROJECT_URL);
  }

  getProjectById(id) {
    return axios.get(`${BASE_PROJECT_URL}/${id}`);
  }

  addProject(project) {
    return axios.post(BASE_PROJECT_URL, project);
  }

  updateProject(project) {
    return axios.put(BASE_PROJECT_URL, project);
  }

  deleteProject(id) {
    return axios.delete(`${BASE_PROJECT_URL}/${id}`);
  }
}

export default new ProjectService();
