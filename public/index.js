const urlWeather = 'https://api.nasa.gov/insight_weather/?api_key=e4nE0ZmWOYdjGYysdCAvpCTn4ZBQWj34uqUca3Nc&feedtype=json&ver=1.0'
const key = 'e4nE0ZmWOYdjGYysdCAvpCTn4ZBQWj34uqUca3Nc'
const submit = document.getElementById('button');

// submit.addEventListener('submit', displayData);

fetch(urlWeather)
    .then(res => res.json())
    .then(json => displayData(json));

function displayData(json) {
console.log(json)
    let todayHigh = Math.floor(json[561].AT.mx * 1.8 + 32) // Convert API temperature to Fahrenheit
    let todayLow = Math.floor(json[561].AT.mn * 1.8 + 32) // Convert API temperature to Fahrenheit
    let todayWind = Math.floor(json[561].HWS.av * 2.2369) // Convert API wind speed to MPH
    let date = new Date().toDateString()
    // console.log(todayHigh, todayLow, todayWind)

    let dynamicDate = `Today is ${date}`
    let dynamicHigh = `The high will reach a chilly ${todayHigh} degrees F`
    let dynamicLow = `The low will reach a frostbitten ${todayLow} degrees F`
    let dynamicWind = `The wind speed is a whopping ${todayWind} mph`

    document.getElementById('date').innerText = dynamicDate
    document.getElementById('high').innerText = dynamicHigh
    document.getElementById('low').innerText = dynamicLow
    document.getElementById('wind').innerText = dynamicWind
    
    // let i = 0;
    // let speed = 30;

    // let array = [dynamicDate, dynamicHigh, dynamicLow, dynamicWind]

    // function typedText() {
    //     for (arr of array) {
    //         if (i < arr) {
    //             document.querySelectorAll("p.text").innerText += arr.charAt(i) ;
    //             i++;
    //             setTimeout(typedText, speed);
    //             console.log(arr)
    //     }
       
    //     }
    // }


    
//     console.log(test)

//    let typedDate = document.getElementById('date').innerText = `Today is ${date}`
//    let typedHigh = document.getElementById('high').innerText = `The high will reach a chilly ${todayHigh} degrees F`
//    let typedLow = document.getElementById('low').innerText = `The low will reach a frostbitten ${todayLow} degrees F `
//    let typedWind = document.getElementById('wind').innerText = `The wind speed is a whopping ${todayWind} mph`
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