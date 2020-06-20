const urlWeather = 'https://api.nasa.gov/insight_weather/?api_key=e4nE0ZmWOYdjGYysdCAvpCTn4ZBQWj34uqUca3Nc&feedtype=json&ver=1.0'
const key = 'e4nE0ZmWOYdjGYysdCAvpCTn4ZBQWj34uqUca3Nc'
const urlMars = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=e4nE0ZmWOYdjGYysdCAvpCTn4ZBQWj34uqUca3Nc'

fetch(urlMars)
    .then(res => res.json())
    .then(json => displayImages(json))

function displayImages(json) {

    let marsBackground = json.photos[2].img_src;

    let imageElement = document.getElementById('mars')
    imageElement.src = marsBackground;
    
    


    // document.div.appendChild(imageElement);

}

// fetch(urlWeather)
// .then(res => res.json())
// .then(json => displayData(json));

// function displayData(json) {
//     let todayHigh = json[555].AT.mx * 1.8 + 32 // Convert API temperature to Fahrenheit
//     let todayLow = json[555].AT.mn * 1.8 + 32 // Convert API temperature to Fahrenheit
//     let todayWind = json[555].HWS.av * 2.2369 // Convert API wind speed to MPH


//     console.log(todayHigh, todayLow, todayWind)

    //(celsius * 1.8) + 32 Celcius to Fahrenheit
    //



    // for (json of temps) {
    //     let i = 0; i < json.length; i++
    //     console.log(json);
    // }

    // console.log(temperature)






//     let rick = json.results[0].image // image url
//     let morty = json.results[1].image // image url

// let imageElement = document.createElement('img');
// imageElement.src = rick;
// document.body.appendChild(imageElement);

// let imageElement2 = document.createElement('img');
// imageElement2.src = morty;
// document.body.appendChild(imageElement2);
