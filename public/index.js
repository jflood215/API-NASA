const urlWeather = 'https://api.nasa.gov/insight_weather/?api_key=e4nE0ZmWOYdjGYysdCAvpCTn4ZBQWj34uqUca3Nc&feedtype=json&ver=1.0'
const key = 'e4nE0ZmWOYdjGYysdCAvpCTn4ZBQWj34uqUca3Nc'
const submit = document.getElementById('button');

// submit.addEventListener('submit', displayData);

fetch(urlWeather)
    .then(res => res.json())
    .then(json => displayData(json));

function displayData(json) {

    let todayHigh = json[556].AT.mx * 1.8 + 32 // Convert API temperature to Fahrenheit
    var n = todayHigh.toFixed(0);
    let todayLow = json[556].AT.mn * 1.8 + 32 // Convert API temperature to Fahrenheit
    let todayWind = json[556].HWS.av * 2.2369 // Convert API wind speed to MPH
    let date = new Date().toDateString()
    console.log(json)
    // console.log(todayHigh, todayLow, todayWind)
    document.getElementById('date').innerText = `Today is ${date}`
    document.getElementById('high').innerText = `The high will reach a chilly ${todayHigh} degrees F`
    document.getElementById('low').innerText = `The low will reach a frostbitten ${todayLow} degrees F `
    document.getElementById('wind').innerText = `The wind speed is ${todayWind} mph`
}

// sol_keys: Array(7)
// 0: "550"
// 1: "551"
// 2: "552"
// 3: "553"
// 4: "554"
// 5: "555"
// 6: "556"

// let today = json.sol_keys[6]