// alert('test') // use in every js, makes sure no errors, will load when ok
// setInterval(function(){ alert("Hello"); }, 1000); // this test will alert every second
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock (used as guide)

var clock = document.getElementById('clock');		// var clock
var body = document.querySelector('body');			// var body

setInterval(function startTime() {		// set interval w function named whatever
	var today = new Date();				// variable to get current TIME (new date)
	var h = today.getHours();			// run var today and get current HOUR
	var m = today.getMinutes();			// run var today and get current MINUTE
	var s = today.getSeconds();			// run var today and get current SECOND
	var hours = checkTime(h);	    	// run new function (below) to see if has 0-9 hours, if true will overwrite
	var minutes = checkTime(m);			// run new function (below) to see if has 0-9 minutes
    var seconds = checkTime(s);			// run new function (below) to see if has 0-9 seconds
	clock.innerHTML = hours + ":" + minutes + ":" + seconds;   		// using the var clock 
	body.style.backgroundColor = "#"+hours + minutes + seconds; 	// using the var body+style.backgroundColor (based on Hex Codes/Color Theory, as the time HHMMSS changes so does the color #123456)
},1000)																// 1000 milliseconds = 1 second

function checkTime(i) {					// this will add 0 in front of #s < 10
    if (i < 10) {i = "0" + i}; 
    return i;
}