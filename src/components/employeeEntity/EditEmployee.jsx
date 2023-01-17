import { Form, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

function EditEmployee({ active, setActive, employee, editEmployeeHandler }) {
  const editEmployee = { ...employee };
  const [data, setData] = useState({
    firstName: editEmployee.firstName,
    lastName: editEmployee.lastName,
    jobTitle: editEmployee.jobTitle,
    email: editEmployee.email,
    phone: editEmployee.phone,
    imageUrl: editEmployee.imageUrl,
  });

  useEffect(() => {
    setData({ ...editEmployee });
  }, [active]);
  console.log(data);
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  function handleInputChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Modal show={active} onHide={setActive}>
        <Modal.Header>
          <Modal.Title>Edit employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                name="firstName"
                type="text"
                autoFocus
                value={data.firstName}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="lastName"
                value={data.lastName}
                type="text"
                autoFocus
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="jobTitle"
                value={data.jobTitle}
                type="text"
                autoFocus
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="email"
                value={data.email}
                type="email"
                autoFocus
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="phone"
                value={data.phone}
                type="text"
                autoFocus
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="imageUrl"
                value={data.imageUrl}
                type="text"
                autoFocus
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setActive(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => editEmployeeHandler(data)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
