import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AsyncSelect from "react-select/async";
import ClientService from "../../services/ClientService";
import EmployeeService from "../../services/EmployeeService";
import ProjectService from "../../services/ProjectService";

const AddProject = () => {
  const [project, setProject] = useState({
    name: "",
    client: { name: "" },
    projectManager: { firstName: "", lastName: "" },
    address: { country: "", city: "", street: "" },
    imageUrl: "",
  });
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (e, name) => {
    if (name === "country" || name === "city" || name === "street") {
      setProject({
        ...project,
        address: { ...project.address, [name]: e.target.value },
      });
    } else if (name === "client") {
      setProject({ ...project, client: e });
    } else if (name === "projectManager") {
      setProject({ ...project, projectManager: e });
    } else {
      setProject({ ...project, [name]: e.target.value });
    }
    if (
      project.name &&
      project.address.country &&
      project.address.city &&
      project.address.street &&
      project.client.name &&
      project.projectManager.firstName &&
      project.projectManager.lastName
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setProject({
      name: "",
      client: { name: "" },
      projectManager: { firstName: "", lastName: "" },
      address: { country: "", city: "", street: "" },
      imageUrl: "",
    });
    setIsValid(false);
  };

  const clients = async () => {
    const response = await ClientService.getClients();
    return response.data;
  };

  const employees = async () => {
    const response = await EmployeeService.getEmployees();
    return response.data;
  };

  const saveProject = async () => {
    await ProjectService.addProject(project)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                style={{ marginTop: "10px" }}
                type="text"
                placeholder="Project name"
                autoFocus
                value={project.name}
                onChange={(event) => handleInputChange(event, "name")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                style={{ marginTop: "10px" }}
                type="text"
                placeholder="Country"
                autoFocus
                value={project.address.country}
                onChange={(event) => handleInputChange(event, "country")}
              />
              <Form.Control
                style={{ marginTop: "10px" }}
                type="text"
                placeholder="City"
                autoFocus
                value={project.address.city}
                onChange={(event) => handleInputChange(event, "city")}
              />
              <Form.Control
                style={{ marginTop: "10px" }}
                type="text"
                placeholder="Street"
                autoFocus
                value={project.address.street}
                onChange={(event) => handleInputChange(event, "street")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <AsyncSelect
                style={{ marginTop: "10px" }}
                placeholder="Select a client"
                cacheOptions
                defaultOptions
                getOptionLabel={(e) => e.name}
                getOptionValue={(e) => e.id}
                loadOptions={clients}
                onChange={(e) => handleInputChange(e, "client")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <AsyncSelect
                style={{ marginTop: "10px" }}
                placeholder="Select a project manager"
                cacheOptions
                defaultOptions
                getOptionLabel={(e) => e.firstName + " " + e.lastName}
                getOptionValue={(e) => e.id}
                loadOptions={employees}
                onChange={(e) => handleInputChange(e, "projectManager")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                style={{ marginTop: "10px" }}
                type="text"
                placeholder="Image URL"
                autoFocus
                value={project.imageUrl}
                onChange={(event) => handleInputChange(event, "imageUrl")}
              />
            </Form.Group>
          </Form>

          <div className="mb-2" style={{ marginTop: "10px" }}>
            <Button variant="primary" disabled={!isValid} onClick={saveProject}>
              Save
            </Button>{" "}
            <Button variant="secondary" type="reset" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProject;
