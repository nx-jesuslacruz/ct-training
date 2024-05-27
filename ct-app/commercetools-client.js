const createClient = require('@commercetools/sdk-client').createClient
const createAuthMiddlewareForClientCredentialsFlow = require('@commercetools/sdk-middleware-auth').createAuthMiddlewareForClientCredentialsFlow
const createHttpMiddleware = require('@commercetools/sdk-middleware-http').createHttpMiddleware
const fetch = require('node-fetch')

const projectKey = 'YOUR_PROJECT_KEY'
const credentials = {
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
}
const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: 'https://auth.commercetools.co',
  projectKey,
  credentials,
  fetch,
})
const httpMiddleware = createHttpMiddleware({
  host: 'https://api.commercetools.co',
  fetch,
})

const client = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

module.exports = client