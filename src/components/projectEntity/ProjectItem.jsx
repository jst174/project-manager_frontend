import { Card } from "react-bootstrap";

const ProjectItem = ({ project }) => {
  const address = project.address;
  const projectManager = project.projectManager;
  return (
    <Card className="text-left">
      <Card.Img variant="top" src={project.imageUrl} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {project.client.name}
        </Card.Subtitle>
        <Card.Text>
          {address.country}, {address.city}, {address.street}
        </Card.Text>
        <Card.Text>
          {projectManager.firstName} {projectManager.lastName}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;
