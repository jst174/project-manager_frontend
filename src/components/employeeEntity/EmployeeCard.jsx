import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import EmployeeService from "../../services/EmployeeService";

function EmployeeCard() {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const [department, setDepartment] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
        setDepartment(response.data.department);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <img src={employee.imageUrl} />
      <h3>
        {employee.firstName} {employee.lastName}
      </h3>
      <h4>{employee.jobTitle}</h4>
      <h4>{department.name}</h4>
      <h4>{employee.email}</h4>
      <h4>{employee.phone}</h4>
    </>
  );
}
export default EmployeeCard;
