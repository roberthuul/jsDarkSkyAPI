const darksky = new DarkSky;
const coord = '59.4369,24.7535'

const userSky = new DarkSky;

darksky.getData(coord).then(data => {
    document.getElementById('tallinnContainer').innerHTML = `Temperatuur: ${data.currently.temperature}°C<br>Ilm: ${data.currently.summary}`;
});

navigator.geolocation.getCurrentPosition(userLocation, noLocation);

function userLocation(position) {
    let userLatitude = roundToFour(position.coords.latitude);
    let userLongitude = roundToFour(position.coords.longitude);
    let userPosition = userLatitude.toString() + ',' + userLongitude.toString();
    userSky.getData(userPosition).then(data => {
        document.getElementById('userContainer').innerHTML = `Temperatuur: ${data.currently.temperature}°C<br>Ilm: ${data.currently.summary}<br>Ajavöönd: ${data.timezone}`;
    });
}

function noLocation() {
    document.getElementById('tempContainer').innerHTML = 'Ei suutnud tuvastada sinu asukohta';
}

function roundToFour(num) {    
    return +(Math.round(num + "e+4")  + "e-4");
}