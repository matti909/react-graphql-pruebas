import mongoose, { Document, Model } from "mongoose";

// Definir la interfaz para el documento de cliente
interface IClient extends Document {
  name: string;
  email: string;
  phone: string;
}

// Definir el esquema del cliente
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

// Definir el modelo del cliente
const Client: Model<IClient> = mongoose.model<IClient>("Client", ClientSchema);

export default Client;
