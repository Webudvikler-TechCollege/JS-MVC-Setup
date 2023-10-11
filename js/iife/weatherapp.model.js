/**
 * Henter aktuel placering fra browser
 * @returns object 
 */
export const getCurrentPosition = async () => {
	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	}

	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			pos => { 
				resolve({
					longitude: pos.coords.longitude,
          			latitude: pos.coords.latitude
				})
			},
			() => { 
				reject('CurPos Error')
			},
			options)
	}) 
}

export const getCoordinates = async (myLong, myLat) => {
	console.log(myLong, myLat);
}