module.exports = {
    options: {
        connection: process.env.DATABASE_URL,
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 80,
        graphql: '/graphql',
        schema: ['public'],
        watch: true,
        defaultRole: 'read',
        skipPlugins: 'graphile-build:NodePlugin',
        appendPlugins: [
            '@graphile-contrib/pg-simplify-inflector',
        ],
        simpleCollections: 'only',
        dynamicJson: true,
        extendedErrors: ['errcode'],
        enableQueryBatching: true,
        graphileBuildOptions: {
            pgOmitListSuffix: true,
        },
    },
}