const DepartmentItem = ({ department }) => {
  return (
    <tr>
      <td>{department.id}</td>
      <td>{department.name}</td>
    </tr>
  );
};

export default DepartmentItem;
