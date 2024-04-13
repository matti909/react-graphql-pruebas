import mongoose, { Document, Model } from "mongoose";

// Definir la interfaz para el documento de proyecto
interface IProject extends Document {
  name: string;
  description: string;
  status: "Not Started" | "In Progress" | "Completed";
  clientId: mongoose.Types.ObjectId;
}

// Definir el esquema del proyecto
const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

// Definir el modelo del proyecto
const Project: Model<IProject> = mongoose.model<IProject>(
  "Project",
  ProjectSchema
);

export default Project;
