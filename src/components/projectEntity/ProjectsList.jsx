import { useEffect, useState } from "react";
import { Container, Button, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProjectService from "../../services/ProjectService";
import ProjectItem from "./ProjectItem";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
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
        onClick={() => navigate("new")}
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
