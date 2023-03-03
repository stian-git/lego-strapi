module.exports = ({ env }) => ({
  host: env('HOST', 'www.tekniskpotet.no'),
  port: env.int('PORT', 443),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'https://www.tekniskpotet.no/strapi'),
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
