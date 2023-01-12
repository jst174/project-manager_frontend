import { useState, useEffect } from "react";
import { Button, Table, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ClientService from "../../services/ClientService";
import ClientItem from "./ClientItem";

const ClientList = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ClientService.getClients();
        setClients(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Button
        onClick={() => navigate("new")}
        className="d-md-flex mt-3 mb-3"
        as="input"
        type="submit"
        value="Add new client"
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => {
            return <ClientItem key={client.id} client={client} />;
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ClientList;
