module.exports = {
    options: {
        connection: process.env.DATABASE_URL,
        host: '0.0.0.0',
        port: 80,
        graphql: '/',
        schema: process.env.SCHEMAS.split(',').map(s => s.trim()).filter(s => !!s),
        jwtSecret: process.env.JWT_SECRET,
        defaultRole: 'anon',
        jwtVerifyAlgorithms: ['HS256'],
        jwtVerifyAudience: '',
        watch: true,
        skipPlugins: 'graphile-build:NodePlugin',
        appendPlugins: [
            '@graphile-contrib/pg-simplify-inflector',
            'postgraphile-upsert-plugin:PgMutationUpsertPlugin',
        ],
        simpleCollections: 'only',
        dynamicJson: true,
        extendedErrors: ['errcode'],
        enableQueryBatching: true,
        disableGraphiql: true,
        graphileBuildOptions: {
            pgOmitListSuffix: true,
        },
    },
}