const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const squelize = require('./config/connection') ;
const SequelizeStore = require('connect-session-sequilize')(session.Store);