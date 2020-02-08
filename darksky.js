class DarkSky {
    constructor() {
        this.key = '7172b2c59cc56a33d3da77c82ca4d360';
        this.url = 'https://api.darksky.net/forecast/';
    }

    async getData(coordinates) {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let urlData = `${proxyUrl}${this.url}${this.key}/${coordinates}?lang=et&units=si`
        const dataResponse = await fetch(urlData);
        const weatherData = await dataResponse.json();

        return weatherData;
    }
}