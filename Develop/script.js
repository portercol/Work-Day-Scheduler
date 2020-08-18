//The first thing I want to do is populate the current date to the top of the page

var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('MMMM Do, YYYY');

