import {makeExecutableSchema} from "graphql-tools";
import {createApolloServer} from "meteor/apollo";
import * as typeDefs from "../graphql/definitions/typeDefs.graphql";
import {resolvers} from "../graphql/resolvers/resolvers";

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
