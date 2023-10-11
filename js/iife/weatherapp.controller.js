import { getCurrentPosition } from "./weatherapp.model.js"

/**
 * Denne controller kalder en Immediately Invoked Function Expression (IIFE), 
 * som er en JavaScript-funktion, der udføres øjeblikkeligt 
 * efter, at den er blevet defineret. 
 * Den er velegnet til at bygge et asynkront scope hvor vi 
 * kan kalde andre asynkrone funktioner og særligt det data 
 * de returnerer. Et godt alternativ til fetch API'ets 
 * then chaining problematik 
 */
(async () => {

	// Henter positions data fra importeret model
	const curPos = await getCurrentPosition()
	console.log({curPos});

})()