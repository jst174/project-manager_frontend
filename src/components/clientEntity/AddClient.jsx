import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ClientService from "../../services/ClientService";

const AddClient = () => {
  const [client, setClient] = useState({ id: "", name: "" });
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function handleInputChange(e, name) {
    setClient({ ...client, [name]: e.target.value });
  }

  const saveClient = async () => {
    await ClientService.addClient(client)
      .then((response) => {
        navigate("/clients");
      })
      .catch((error) => console.log(error));
  };

  const reset = (e) => {
    e.preventDefault();
    setClient({ id: "", name: "" });
  };

  return (
    <Container>
      <Form
        className="row h-100 justify-content-center align-items-center"
        onSubmit={handleFormSubmit}
      >
        <Form.Group>
          <Form.Control
            style={{ marginTop: "10px" }}
            type="text"
            placeholder="Name"
            autoFocus
            value={client.name}
            onChange={(event) => handleInputChange(event, "name")}
          />
        </Form.Group>
      </Form>
      <div className="mb-2" style={{ marginTop: "10px" }}>
        <Button variant="primary" onClick={saveClient}>
          Save
        </Button>{" "}
        <Button variant="primary" onClick={reset}>
          Reset
        </Button>
      </div>
    </Container>
  );
};

export default AddClient;
