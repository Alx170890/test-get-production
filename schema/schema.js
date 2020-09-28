const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const Users = require('../models/user');
const Books = require('../models/book');

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({        
        id: { type: GraphQLID},
        cover: { type: GraphQLString},
        title: { type: GraphQLString},
        discription: { type: GraphQLString},
        books: { 
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Books.findById(parent.bookId);
            },
        },
    }),    
});

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        email: { type: GraphQLString},
        password: { type: GraphQLString},
        users: { 
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return Users.findById(parent.userId);
            },
        },
    }),    
});

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args) {
                return Users.findById(args.id);
            },
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return Users.find({});;
            },
        },
        book: {
            type: BookType,
            args: { id: { type: GraphQLID}},            
            resolve(parent, args) {
                return Books.findById(args.id);
            },            
        },  
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Books.find({});;
            },
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});