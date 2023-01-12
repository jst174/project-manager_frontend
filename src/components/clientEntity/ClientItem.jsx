const ClientItem = ({ client }) => {
  return (
    <tr>
      <td>{client.id}</td>
      <td>{client.name}</td>
    </tr>
  );
};

export default ClientItem;
