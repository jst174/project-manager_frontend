import { useState, useEffect } from "react";
import { Button, Table, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import styles from "./DepartmentItem.module.css";
import DepartmentService from "../../services/DepartmentService";
import DepartmentItem from "./DepartmentItem";

const DepartmentsList = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DepartmentService.getDepartments();
        setDepartments(response.data);
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
        value="Add new department"
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => {
            return (
              <DepartmentItem key={department.id} department={department} />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default DepartmentsList;
