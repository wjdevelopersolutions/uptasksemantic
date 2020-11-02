import '@babel/polyfill';
import express from 'express';
import path from 'path';
import db from './config/database';
import colors from 'colors';

import { vardump } from './helpes';
const app = express();

import './models/Proyectos';

// This method crate all tables of mySQL database auto importer before
db.sync()
  .then( () => console.log(`Connection has been ${colors.green('established successfully')}.`) )
  .catch( error => console.log('Unable to connect to the database: ', error) );

// Set body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	res.locals.vardump = vardump;
	next();
})

import indexRoutes from './routes/index';
import proyectosRoutes from './routes/proyectos';

app.use(indexRoutes());
app.use('/proyectos', proyectosRoutes());



export default app;
