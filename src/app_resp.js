const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://estudiante-cafetery.up.railway.app/',
  clientID: 'aP0glnG88Bhj49aztGJqLCRpGxjZN7OF',
  issuerBaseURL: 'https://metacafetery.us.auth0.com/'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});