import { useEffect, useState } from "react";
import { Container, Button, CardGroup } from "react-bootstrap";
import ProjectService from "../../services/ProjectService";
import ProjectItem from "./ProjectItem";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProjectService.getProjects();
        setProjects(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Button
        className="d-md-flex mt-3 mb-3"
        as="input"
        type="submit"
        value="Add new project"
      />
      <CardGroup>
        {projects.map((project) => {
          return <ProjectItem key={project.id} project={project} />;
        })}
      </CardGroup>
    </Container>
  );
};

export default ProjectsList;
