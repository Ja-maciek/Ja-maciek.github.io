console.log("ddddd");

//window.addEventListener("load", ()=>{
	let mic, meter;
	let initialized = false;

	function setup(){
		let cnv = createCanvas(window.innerWidth, window.innerHeight);
		background(255);

		let micBttn = document.getElementById("micBttn");
		//micBttn.disabled = !Tone.UserMedia.supported;
		micBttn.addEventListener("click", () => {
			console.log("dddd");
			if (!initialized) {
				micBttn.style.display = "none";
				/*Tone.context.resume();
				mic = new Tone.UserMedia();
				mic.open();
				meter = new Tone.Meter();
				mic.connect(meter);*/
				userStartAudio()
				mic = new p5.AudioIn();
				mic.start();

				initialized = true;
			}
		});
	}

	let i=0;

	function draw(){
		background(0);
		if(initialized){
				console.log(mic.getLevel());
		}


		let dim = [50, 100];
		for(let j=0;j<dim[0]*dim[1];j++){
			push();
			translate(Math.floor(j/dim[0])*20+10, j%dim[0]*20+10);
			rotate(2*PI*(i+j)/(height/10));
			if(initialized){
				rect(-10, -10, map(mic.getLevel(), 0.000013, 0.000015, 0, 50), map(mic.getLevel(), 0.000015, 0.000013, 0, 50));
			}else{
				rect(-10, -10, map(mouseX, 0, width, 0, 200), map(mouseY, 0, height, 0, 200));
			}
			pop();
		}


		if(i>=height){
			i=0;
		}else{
			i++;
		}
	}
//}, true);