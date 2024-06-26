import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import connectDB from "./config/db";

const PORT = process.env.PORT || 8080;
const app: Application = express();

app.use(cors());

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
