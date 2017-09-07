import {makeExecutableSchema} from "graphql-tools";
import {createApolloServer} from "meteor/apollo";
import {resolvers} from "../graphql/resolvers";
import * as typeDefs from "../models/typeDefs.graphql";

export class Main {

    public start(): void {
        this.initApolloServer();
    }

    private initApolloServer(): void {
        const schema = makeExecutableSchema({
            typeDefs,
            resolvers,
        });
        createApolloServer({
            schema
        });
    }
}
