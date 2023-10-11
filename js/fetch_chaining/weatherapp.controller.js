import { weatherModel } from "./weatherapp.model.js";
import { weatherView } from "./weatherapp.view.js";

/**
 * Kalder fetch modellen med then/catch chaining
 */
weatherModel()
	.then(data => {
		weatherView(data);
	}).catch(error => {
		console.error(error);
	})
