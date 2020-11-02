import Proyectos from '../models/Proyectos';

export const proyectosPorUrl = async (req, res, next) => 
{

	const [ proyectos, proyectoSelected ] = await Promise.all([
		Proyectos.findAll(),
		Proyectos.findOne({
			where: {
				url: req.params.url
			}
		})
	]);

	if(!proyectoSelected) return next()

	res.render('tareas', { pageTitle: 'tareas del proyecto', proyectos, proyectoSelected });
} 

export const proyectosPorUrlEditar = async (req, res, next) => 
{

	const [ proyectos, proyectoSelected ] = await Promise.all([
		Proyectos.findAll(),
		Proyectos.findOne({
			where: {
				url: req.params.url
			}
		})
	]);

	res.render('tareas', { pageTitle: 'editar tarea', proyectos, proyectoSelected  })

}
