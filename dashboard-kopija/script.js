let params = (new URL(document.location)).searchParams;
let sensorIP = params.get('sensorIP');

function read(sensorName){
	try{
		var request = new Request("http://" + sensorIP + "/justAsking?readPlease=" + sensorName);
		return fetch(request).then(
			function(response) {
				return response.text();
			}
		)/*.then(
			function(text) {
				document.getElementById(sensorName).innerHtml = text;
			}
		)*/;
	}catch(e){
		console.log("Error: Cannot connect to sensor.");
		return "e";
	}
}

function set(sensorName){
	document.getElementById(sensorName).innerHtml = read(sensorName);
}

setInterval(() => {
	set("temperature");
	set("humidity");
	set("atm_pressure");
	set("main_caqi");
	set("pm1_0");
	set("pm2_5");
	set("pm10_0");
	
	pollution_level = read("");
	document.getElementById("pollution_level").innerHtml = pollution_level;
	if(pollution_level == "0.0"){
		document.getElementById("p_level").innerHtml = "VERY_LOW";
	}else if(pollution_level == "1.0"){
		document.getElementById("p_level").innerHtml = "LOW";
	}else if(pollution_level == "2.0"){
		document.getElementById("p_level").innerHtml = "MEDIUM";
	}else if(pollution_level == "3.0"){
		document.getElementById("p_level").innerHtml = "HIGH";
	}else if(pollution_level == "4.0"){
		document.getElementById("p_level").innerHtml = "VERY_HIGH";
	}else{
		console.log("Error: Incorrect air pollution level.");
	}
}, 5000);