$(function () {

  const latitude = navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    console.log(lat.toString());
  });

  const longitude = navigator.geolocation.getCurrentPosition((position) => {
    lon = position.coords.longitude;
    console.log(lon.toString());
  });


 $('input[type=submit]').on('click', () => {
   $('#console-log').text('booyah');
 });














});
