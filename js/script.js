
// Fonction appelée lors du click du bouton
function start() {

  
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()

    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

   

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      

    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });



}

function getThreeDaysForecast(){


  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchOtherDaysForecast()

    .then(function(response) {



      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      // const main = data.weather[0].main;
      // const description = data.weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      const temp1 = data.list[1].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      const temp2 = data.list[2].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);



      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = data.list[0].weather[0].main ;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = data.list[0].weather[0].description;
      document.getElementById('iconTomorrow-weather-container').innerHTML = icon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;

      document.getElementById('afterTo-forecast-main').innerHTML = data.list[1].weather[0].main;
      document.getElementById('afterTo-forecast-more-info').innerHTML = data.list[1].weather[0].description;
      document.getElementById('iconAfter-weather-container').innerHTML = icon1;
      document.getElementById('afterTo-forecast-temp').innerHTML = `${temp1}°C`;

      document.getElementById('afterToto-forecast-main').innerHTML = data.list[2].weather[0].main;
      document.getElementById('afterToto-forecast-more-info').innerHTML = data.list[2].weather[0].description;
      document.getElementById('iconAfterAfter-weather-container').innerHTML = icon2;
      document.getElementById('afterToto-forecast-temp').innerHTML = `${temp2}°C`;


    })
    .catch(function(error) {

      // Affiche une erreur
      console.error(error);
    });

}