/**
 * Funktion til at fetche data med
 * @returns json array
 */
export const weatherModel = async () => {
	try {
		try {
			const response = await fetch('https:/api.mediehuset.net/detutroligeteater/events');
			const data = await response.json();
			return data;
		} catch (error) {
			console.error(error);
		}
	} finally {
		console.log('Promise fulfilled');
	}
}