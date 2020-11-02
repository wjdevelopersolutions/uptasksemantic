import Sequelize from 'sequelize';
import slug from 'slug';
import { nanoid } from 'nanoid';

// Import database mySQL from config
import db from '../config/database';

// Define Schema in Sequelize
const Proyectos = db.define('proyectos', {

  // Define schema types
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  url: Sequelize.STRING

}, {
  hooks: {
    beforeCreate(proyecto)
    {
      const url = slug(proyecto.name).toLowerCase();
      proyecto.url = `${url}-${nanoid(10)}`;
    }
  }
});

export default Proyectos;
