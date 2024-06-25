import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { prismaClient } from "../clients/db";

import {user} from "./user";

export async function initServer() {
    const app = express();
app.use(bodyParser.json());

const graphqlServer = new ApolloServer({
    typeDefs: `
        ${user.types}

        type Query {
            ${user.queries}
        }
        
    `,
    resolvers: {
        Query: {
            ...user.resolvers.queries,
        },
        
    },
});
await graphqlServer.start();

app.use("/graphql", expressMiddleware(graphqlServer));

    return app;
}