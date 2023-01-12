import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import styles from "./EmployeeItem.module.css";

function EmployeeItem({ employee, deleteEmployee, setActive, editEmployee }) {
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
        />
      </td>
    </tr>
  );
}

export default EmployeeItem;
