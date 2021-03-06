$(document).ready(function() {
	var thermostat = new Thermostat();
  modeCheck();
  refreshTempIndicator();


	function modeCheck() {
		if (thermostat.mode === true) {
			$( '#psMode' ).css({
				'background-color': '#ff9999'
			});
			$('#state').text('on');
		} else {
			$( '#psMode' ).css({
				'background-color': 'white'
			});
			$('#state').text('off');
		}
	}

  function refreshTempIndicator() {
    $("#currentTemp").text(thermostat.temp);
    $("#currentUsage").text(thermostat.usage());
  }


	$.get("http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=b6907d289e10d714a6e88b30761fae22", function(site) {
		console.log(site['list'][0]['main']['temp'])
		$("#localTemp").text(site['list'][0]['main']['temp']);
	});

	$("#increaseTemp").click(function(event) {
		if (!thermostat.up()) {
			alert("Max Temperature Reached!")
      window.open('https://www.youtube.com/watch?v=GeZZr_p6vB8&start=69', '_blank');
		} ;

    refreshTempIndicator();
		event.preventDefault();
	});

	$("#decreaseTemp").click(function(event) {
		if (!thermostat.down()) {alert("Min Temperature Reached!")} ;
    refreshTempIndicator();
		event.preventDefault();
	});

	$("#reset").click(function(event) {
    thermostat.reset();
    refreshTempIndicator();
		event.preventDefault();
	});

	$("#psMode").click(function(event) {
		thermostat.powerSaving();
    modeCheck();
    refreshTempIndicator();
		event.preventDefault();
	});

});
