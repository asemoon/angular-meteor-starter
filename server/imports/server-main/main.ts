import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
import {typeDefs} from '../graphql/schema';
import {resolvers} from '../graphql/resolvers';


export class Main {
    private initApolloServer(): void {
        const schema = makeExecutableSchema({
            typeDefs,
            resolvers,
        });
        createApolloServer({
            schema,
        });
    }

    start(): void {
        this.initApolloServer();
    }
}
