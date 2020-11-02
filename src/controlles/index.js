import Proyectos from '../models/Proyectos';

export const proyectoHome = async (req, res, next) => 
{
	const proyectos = await Proyectos.findAll();
	res.render('index', { pageTitle: 'altiva task', proyectos });
}

export const agregarProyecto = async (req, res, next) => 
{
	const proyectos = await Proyectos.findAll();
	res.render('agregar-proyecto', { pageTitle: 'nuevo proyecto', proyectos });
}

export const agregarProyectoPost = async (req, res, next) => 
{
	const { name } = req.body;
	const errors = [];

	if (!name) {
		errors.push({ msg: 'Debes de agregar el nombre del proyecto' });
	}

	if ( errors.length > 0 ) {
		const proyectos = await Proyectos.findAll();
		return res.render('agregar-proyecto', { pageTitle: 'agregar proyecto', errors, proyectos });
	}
	
	// Proyecto.create
	const proyecto = await Proyectos.create({ name });
	res.redirect('/');

}


