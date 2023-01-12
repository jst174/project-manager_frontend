import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";

function NewEmployee({ active, setActive, addEmployee }) {
  const [data, setData] = useState({});
  function handleFormSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(data));
  }
  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  return (
    <>
      <Modal show={active} onHide={setActive}>
        <Modal.Header>
          <Modal.Title>Add new employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="First name"
                autoFocus
                onChange={(event) => handleInputChange(event, "firstName")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Last name"
                autoFocus
                onChange={(event) => handleInputChange(event, "lastName")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Job title"
                autoFocus
                onChange={(event) => handleInputChange(event, "jobTitle")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                autoFocus
                onChange={(event) => handleInputChange(event, "email")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Phone"
                autoFocus
                onChange={(event) => handleInputChange(event, "phone")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Image URL"
                autoFocus
                onChange={(event) => handleInputChange(event, "imageUrl")}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setActive(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addEmployee(data)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewEmployee;
