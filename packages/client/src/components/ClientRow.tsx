import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../services/mutations";
import { GET_CLIENTS, GET_PROJECTS } from "../services/queries";
import { Client } from "../types";
import { FaTrash } from "react-icons/fa";

const ClientRow = ({ client }: { client: Client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });
  const handleDelete = () => {
    deleteClient();
  };

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
