import { getWeatherData } from "./weatherapp.model.js";

/**
 * Kalder fetch modellen med then/catch chaining
 */
getWeatherData()
	.then(data => {
		console.log(data);
	}).catch(error => {
		console.error(error);
	})
