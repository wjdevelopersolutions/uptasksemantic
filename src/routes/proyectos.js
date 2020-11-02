/**
 * Path: /proyectos
 * Create by wjdevelopersolutions
 * @proyectos_routes
 */

import express from 'express';
const router = express.Router();

import { 
	proyectosPorUrl,
	proyectosPorUrlEditar 
} from '../controlles/proyectos';

export default function() {

	router.get('/:url', proyectosPorUrl);
	router.get('/:url/editar', proyectosPorUrlEditar);

	return router;
}
