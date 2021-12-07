let starsArray = [];
let starsTotal = 500;

let theta = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	colorMode(HSB);
	textAlign(LEFT);
	
	for (let i = 0; i < starsTotal; i++) {
		starsArray[i] = new Stars();	
	}
	
}

function draw() {
	
	background(0, 0, 0);
	
	//stars
	for (let i = 0; i < starsTotal; i++) {
		starsArray[i].update(i);	
	}
	
	//theta = one Earth year. VCeloity for the subsequent planets are relative to 
	//theta + x
	theta = theta + 0.01;
	let amplitude = 200;
	
	//sun
	let x = width/2;
	let y = height/2;
	
	let hue = 40 + sin(theta) * 5;
	fill(hue, 100, 100);
	//let diameter = sin(theta) * 100;
	ellipse(x, y, 120);
	
	
	//mercury 88 days which is 4.15 * the spead of Earth
	//offset amplitude simulates orbits that are ellipses rather than perfect circles
	let mercuryX = width/2 + cos(theta * 4.15) * (amplitude - 130);
	let mercuryY = height/2 + sin(theta * 4.15) * (amplitude - 110);
	
	fill(20, 50, 80);
	ellipse(mercuryX, mercuryY, 15);
	
	//venus 225 days, 1.65 * the spead of Earth
	let venusX = width/2 + cos(theta * 1.62) * (amplitude - 90);
	let venusY = height/2 + sin(theta * 1.62) * (amplitude - 75);
	
	fill(100, 70, 90);
	ellipse(venusX, venusY, 18);
	
	//earth 365 days * 1
	let earthX = width/2 + cos(theta) * (amplitude - 40);
	let earthY = height/2 + sin(theta) * (amplitude - 35);
	
	fill(180, 70, 90);
	ellipse(earthX, earthY, 20);
	fill(320, 100, 100);
	textSize(15);
	textFont('arial');
	text('you', earthX - 40, earthY - 15); 
	text('are', earthX - 40, earthY);
	text('here',earthX - 40, earthY + 15);
	
	//mars 0.53 * velocity of earth
	let marsX = width/2 + cos(theta * 0.53) * (amplitude - 20);
	let marsY = height/2 + sin(theta * 0.53) * (amplitude - 5);
	
	fill(10, 70, 90);
	ellipse(marsX, marsY, 15);
	
	//jupiter * 0.08 * velocity of earth
	let jupiterX = width/2 + cos(theta * 0.08) * (amplitude + 60);
	let jupiterY = height/2 + sin(theta * 0.08) * (amplitude + 45);
	
	fill(20, 80, 90);
	ellipse(jupiterX, jupiterY, 55);
	
	//saturn * 0.03
	let saturnX = width/2 + cos(theta * 0.03) * (amplitude + 120);
	let saturnY = height/2 + sin(theta * 0.03) * (amplitude + 100);
	
	fill(30, 80, 90);
	ellipse(saturnX, saturnY, 45);
	
	//ring
	push();
	strokeWeight(4);
	stroke(30, 80, 90);
	noFill();
	ellipse(saturnX, saturnY, 60, 20);
	pop();
	
	//uranus * 0.01
	let uranusX = width/2 + cos(theta * 0.01) * (amplitude + 200);
	let uranusY = height/2 + sin(theta * 0.01) * (amplitude + 190);
	
	fill(200, 80, 90);
	ellipse(uranusX, uranusY, 32);
	
	//neptune * 0.007
	let neptuneX = width/2 + cos(theta * 0.007) * (amplitude + 250);
	let neptuneY = height/2 + sin(theta * 0.007) * (amplitude + 220);
	
	fill(250, 80, 90);
	ellipse(neptuneX, neptuneY, 28);
	
	//when I was growing up Pluto was a planet!
	//orbit * 0.004
	let plutoX = width/2 + cos(theta * 0.004) * (amplitude + 290);
	let plutoY = height/2 + sin(theta * 0.004) * (amplitude + 260);
	
	fill(100, 0, 60);
	ellipse(plutoX, plutoY, 10);
	
}






class Stars {
	
	constructor(i) {
		
		this.x = random(width);
		this.y = random(height);
		// this.velX = 1;
		// this.velY = 1;
		this.hue = 100;
		this.sat = 0;
		this.bri = random(50, 80);
		
	}
	
	update(i) {
		
		// this.x += this.velX;
		// this.y += this.velY;
		
		fill(this.hue, this.sat, this.bri);
		ellipse(this.x, this.y, random(2, 5), random(2, 5));
		
	}
	
}