import {
  RiAccountBoxFill,
  RiDeleteBin2Line,
  RiEdit2Line,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import styles from "./EmployeeItem.module.css";

function EmployeeItem({ employee, deleteEmployee, setActive, editEmployee }) {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{employee.id}</td>
      <td>
        {employee.firstName} {employee.lastName}
      </td>
      <td>{employee.jobTitle}</td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>
        <RiAccountBoxFill
          className={styles.editIcon}
          onClick={() => navigate(`${employee.id}`)}
        />
        <RiEdit2Line
          className={styles.editIcon}
          onClick={() => {
            setActive(true);
            editEmployee(employee);
          }}
        />
        <RiDeleteBin2Line
          onClick={() => deleteEmployee(employee.id)}
          className={styles.deleteIcon}
          employee={employee}
        />
      </td>
    </tr>
  );
}

export default EmployeeItem;
