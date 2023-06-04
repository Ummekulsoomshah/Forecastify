let min_temp = document.getElementById("min_temp")
let max_temp = document.getElementById("max_temp")
let temp = document.getElementById("temp")
let wind_speed = document.getElementById("wind_speed")
let wind_degrees = document.getElementById("wind_degrees")
let sunrise = document.getElementById("sunrise")
let sunset = document.getElementById("sunset")
let cloud_pct = document.getElementById("cloud_pct")
let feels_like = document.getElementById("feels_like")
let humidity = document.getElementById("humidity")
let cityName = document.getElementById("cityName")
let SubmitEvent = document.getElementById("submit");
let temp2 = document.getElementById("temp2");
let humidity2 = document.getElementById("humidity2");
let wind_speed2= document.getElementById("wind_speed2");



const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=city';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e5f9d4bef3msh1d0b752d2f2046ep1d9de4jsnbd505b2e4dc1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
		"Content-Type": "application/json"
	}
};

// async function data(city) {
// 	cityName.innerHTML=city
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.json();
// 		console.log("reponse",response)
		
// 		min_temp.innerHTML = result.min_temp
// 		max_temp.innerHTML = result.max_temp
// 		wind_speed.innerHTML = result.wind_speed
// 		wind_degrees.innerHTML = result.wind_degrees
// 		sunrise.innerHTML = result.sunrise
// 		sunset .innerHTML= result.sunset
// 		cloud_pct.innerHTML = result.cloud_pct
// 		temp.innerHTML = result.temp
// 		feels_like.innerHTML = result.feels_like
// 		humidity.innerHTML = result.humidity
// 		console.log(result);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }
// SubmitEvent.addEventListener("click",(e)=>{
// 	e.preventDefault()
// 	data(city.value)
// })
// data("Karachi");
async function data(city) {
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
	cityName.innerHTML = city;
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json();
	  console.log("response", response);
  
	  min_temp.innerHTML = result.min_temp;
	  max_temp.innerHTML = result.max_temp;
	  wind_speed.innerHTML = result.wind_speed;
	  wind_degrees.innerHTML = result.wind_degrees;
	  sunrise.innerHTML = result.sunrise;
	  sunset.innerHTML = result.sunset;
	  cloud_pct.innerHTML = result.cloud_pct;
	  temp.innerHTML = result.temp;
	  feels_like.innerHTML = result.feels_like;
	  humidity.innerHTML = result.humidity;
	  humidity2.innerHTML = result.humidity2;
	  temp2.innerHTML = result.temp2;
	  wind_speed2.innerHTML = result.wind_speed2;
  
	  console.log(result);
	} catch (error) {
	  console.error(error);
	}
  }
  
  SubmitEvent.addEventListener("click", (e) => {
	e.preventDefault();
	const city = document.getElementById("city").value;
	data(city);
  });
  
  data("Karachi");
  