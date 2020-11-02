import 'dotenv/config';
import app from './server';
import colors from 'colors';


const App = async () => {

	try {

		await app.listen(process.env.PORT);
		console.log(`Servidor corriendo en el puerto ${colors.green(process.env.PORT)}`)
		
	} catch (error) {

		console.log(error);
		throw new Error(`Error al levantar el servidor: ${error.message}`);

	}

}

App();
