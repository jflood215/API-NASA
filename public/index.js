const urlWeather =
  "https://api.nasa.gov/insight_weather/?api_key=e4nE0ZmWOYdjGYysdCAvpCTn4ZBQWj34uqUca3Nc&feedtype=json&ver=1.0";
const key = "e4nE0ZmWOYdjGYysdCAvpCTn4ZBQWj34uqUca3Nc";
const submit = document.getElementById("button");

// submit.addEventListener('submit', displayData);

fetch(urlWeather)
  .then((res) => res.json())
  .then((json) => displayData(json));

function displayData(json) {
  console.log(json);

  console.log(json.sol_keys.length);
  for (let i = 2; i < json.sol_keys.length; i++) {
    let solNum = json.sol_keys[i];
    console.log(solNum);
    let solObject = json[solNum];
    console.log(solObject);

    let todayHigh = Math.round(solObject.AT.mx * 1.8 + 32); // Convert API temperature to Fahrenheit
    let todayLow = Math.round(solObject.AT.mn * 1.8 + 32); // Convert API temperature to Fahrenheit
    let todayWind = Math.round(solObject.HWS.av * 2.2369); // Convert API wind speed to MPH
    let date = new Date().toDateString();
    console.log(todayHigh, todayLow, todayWind);

    let dynamicDate = `Today is ${date}`;
    let dynamicHigh = `The high will reach a chilly ${todayHigh} degrees F`;
    let dynamicLow = `The low will reach a frostbitten ${todayLow} degrees F`;
    let dynamicWind = `The wind speed is a whopping ${todayWind} mph`;

    document.getElementById("date").innerText = dynamicDate;
    document.getElementById("high").innerText = dynamicHigh;
    document.getElementById("low").innerText = dynamicLow;
    document.getElementById("wind").innerText = dynamicWind;
  }
}
