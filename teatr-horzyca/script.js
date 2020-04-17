f = 0;
lightInterval = null;
window.onload = () => {
	document.getElementsByClassName("lightsSignContent")[0].innerHTML = "scena teraz jest pusta";
};

function flipLighting(){
	if(f == 0){
		document.getElementById("lights0").style.display = "none";
		document.getElementById("lights1").style.display = "block";
	}else{
		document.getElementById("lights0").style.display = "block";
		document.getElementById("lights1").style.display = "none";
	}
	
	f = f==0 ? 1 : 0;
}

function showHideLights(visible){
	if(visible){
		document.getElementById("lights0").style.display = "block";
		document.getElementById("lights1").style.display = "none";
		
		lightsSign = document.getElementsByClassName("lightsSign");
		for(i=0;i<lightsSign.length;i++){
			lightsSign[i].style.display = "block";
		}
	}else{
		document.getElementById("lights0").style.display = "none";
		document.getElementById("lights1").style.display = "none";
		
		lightsSign = document.getElementsByClassName("lightsSign");
		for(i=0;i<lightsSign.length;i++){
			lightsSign[i].style.display = "none";
		}
	}
}

window.addEventListener('scroll', function(e){
	if(window.pageYOffset >= 350){
		document.getElementsByClassName("logo")[0].style.visibility = 'hidden';
		
		if(lightInterval == null){
			
			showHideLights(visible=true);
		
			lightInterval = window.setInterval(flipLighting, 1000);
			console.log("setting");
		}
	}else{
		document.getElementsByClassName("logo")[0].style.visibility = 'visible';
		if(!(lightInterval==null)){
			try{
				window.clearInterval(lightInterval);
				console.log("clearing");
				lightInterval = null;
				
				showHideLights(visible=false);
			}catch(eCode){}
		}
	}
});