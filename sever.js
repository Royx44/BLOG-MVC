const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Create an instance of Handlebars with helpers
const hbs = exphbs.create({ helpers });

// Session configuration
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 300000,      // Session expires after 300 seconds (5 minutes)
    httpOnly: true,
    secure: false,       // Change to true if using HTTPS
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize       // Use Sequelize for session storage
  })
};

// Set up Express to use sessions
app.use(session(sess));

// Set up Handlebars as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the defined routes
app.use(routes);

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port', PORT));
});
