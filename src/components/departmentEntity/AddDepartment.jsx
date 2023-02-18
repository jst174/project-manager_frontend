import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DepartmentService from "../../services/DepartmentService";

const AddDepartment = () => {
  const [department, setDepartment] = useState({ id: "", name: "" });
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function handleInputChange(e, name) {
    setDepartment({ ...department, [name]: e.target.value });
  }

  const saveDepartment = async () => {
    await DepartmentService.addDepartment(department)
      .then((response) => {
        navigate("/departments");
      })
      .catch((error) => console.log(error));
  };

  const reset = (e) => {
    e.preventDefault();
    setDepartment({ id: "", name: "" });
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
            value={department.name}
            onChange={(event) => handleInputChange(event, "name")}
          />
        </Form.Group>
      </Form>
      <div className="mb-2" style={{ marginTop: "10px" }}>
        <Button variant="primary" onClick={saveDepartment}>
          Save
        </Button>{" "}
        <Button variant="primary" onClick={reset}>
          Reset
        </Button>
      </div>
    </Container>
  );
};

export default AddDepartment;
