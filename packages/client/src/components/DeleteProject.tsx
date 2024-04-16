import React from "react";
import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DELETE_PROJECT } from "../services/mutations";
import { GET_PROJECTS } from "../services/queries";

interface DeleteProjectProps {
  projectId: string;
}

const DeleteProject: React.FC<DeleteProjectProps> = ({ projectId }) => {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const handleClick = () => {
    deleteProject();
  };

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={handleClick}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};

export default DeleteProject;
