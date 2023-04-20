
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8fa07117b6msh5f55b6ab72aef6ep165543jsn4d2f91b221b1',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"

export const WEATHER_API_KEY = "c9b7e31edbb359eb7a025a4e437d8354"

// fetch('/cities', geoApiOptions)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));