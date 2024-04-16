import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../services/queries";
import { Client } from "../types";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
import ClientRow from "./ClientRow";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const clientsPerPage = 2;
  const [currentPage, setCurrentPage] = React.useState(1);

  // Función para calcular el índice del último cliente en la página actual
  const indexOfLastClient = currentPage * clientsPerPage;
  // Función para calcular el índice del primer cliente en la página actual
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  // Función para obtener los clientes de la página actual
  const currentClients = data?.clients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentClients.map((client: Client) => (
            <ClientRow key={client.id} client={client} />
          ))}
        </tbody>
      </table>

      <Pagination
        itemsPerPage={clientsPerPage}
        totalItems={data?.clients.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Clients;
