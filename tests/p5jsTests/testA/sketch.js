document.onload = () => {
	let mic;

	function setup(){
		let cnv = createCanvas(window.innerWidth, window.innerHeight);
		cnv.mousePressed(userStartAudio);

		
		mic = new p5.AudioIn();
		mic.start();
	}

	let i=0;

	function draw(){
		background(0);
		console.log(mic.getLevel());


		/*let dim = [50, 100];
		for(let j=0;j<dim[0]*dim[1];j++){
			push();
			translate(Math.floor(j/dim[0])*20+10, j%dim[0]*20+10);
			rotate(2*PI*(i+j)/(height/10));
			rect(-10, -10, map(mic.getLevel(), 0, 1, 0, 200), map(mic.getLevel(), 1, 0, 0, 200));
			pop();
		}


		if(i>=height){
			i=0;
		}else{
			i++;
		}*/
	}
}