import express from 'express';
const router = express.Router();

import { 
	proyectoHome, 
	agregarProyecto, 
	agregarProyectoPost
} from '../controlles';

export default function() {

	router.get('/', proyectoHome);
	router.get('/agregar-proyecto', agregarProyecto);
	router.post('/agregar-proyecto', agregarProyectoPost);

	return router;
}
