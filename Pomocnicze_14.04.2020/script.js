f = 0;
function flipLighting(){
	if(f == 0){
		document.getElementsByClassName("lights0")[0].style.display = "none";
		document.getElementsByClassName("lights1")[0].style.display = "block";
	}else{
		document.getElementsByClassName("lights0")[0].style.display = "block";
		document.getElementsByClassName("lights1")[0].style.display = "none";
	}
}

window.addEventListener('scroll', function(e){
	if(window.pageYOffset >= 350){
		document.getElementsByClassName("logo")[0].style.display = "none";
		
		lightInterval = window.setInterval(flipLighting(), 1000);
	}else{
		document.getElementsByClassName("logo")[0].style.display = "block";
		
		try{
			window.clearInterval(lightInterval);
		}catch(eCode){}
	}
});