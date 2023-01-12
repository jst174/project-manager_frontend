import axios from "axios";

const BASE_CLIENT_URL = "http://localhost:8080/api/v1/clients";

class ClientService {
  getClients() {
    return axios.get(BASE_CLIENT_URL);
  }

  getClientById(id) {
    return axios.get(`${BASE_CLIENT_URL}/${id}`);
  }

  addClient(client) {
    return axios.post(BASE_CLIENT_URL, client);
  }

  updateClient(client) {
    return axios.put(BASE_CLIENT_URL, client);
  }

  deleteClient(id) {
    return axios.delete(`${BASE_CLIENT_URL}/${id}`);
  }
}

export default new ClientService();
