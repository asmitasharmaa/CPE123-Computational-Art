//Efforts by: Asmita Sharma & Zuzanna Dominik

var x=354;
var y=290;
var sc=1;
var wx1 = 0;
var wx2 = 0;
var dwx1 = .2;
var dwx2 = -.2;
var walk_x = 950;
var walk_y = 380;
var d_walk_y = .2;
var boat_x = 0;
var change_x= 1.5;
var change_f= 1;
var scale_man = .5;

function setup()
{
	createCanvas(800,400);
	background(40,180,230);
}

function draw() 
{	
	// Blue Background water
		fill(202, 226, 232);
		rect(0, 0, 800, 700);

		noStroke();		
		fill(157, 202, 202, 180);
		rect(0, 100, 800, 150);

		fill(20, 188, 232, 100); //2

	//rect(0, 250, 400, 150);		
		rect(0, 100, 800, 100);

		fill(75, 165, 242, 150); //3
		rect(0, 200, 800, 100)

		fill(20, 148, 232, 150); //4
	
	//fill(54, 150, 232);
		rect(0, 300, 800, 100);	

	//clouds
		fill(200,200);
		stroke(0);
		var m; //move
		m=400;
		ellipse(350+m,5, 40);
		ellipse(370+m,30, 40);
		ellipse(340+m,40, 40);
		ellipse(310+m,35, 40);
		ellipse(330+m,20, 40);

		ellipse(30,50, 40);
		ellipse(67,45, 40);
		ellipse(90,55, 40);
		ellipse(45,70, 40);
		ellipse(75,65, 40);

	//New York
		fill(0);
		textSize(40);
		textFont('Courier');
		text('Atlantis', 120,50);

	//buildings
		var bline;
		bline=260

		fill(180);
		noStroke();
		rect(10,160, 30,(bline-160));
		rect(17,140, 15, 25);

		fill(150);
		rect(40,110, 20,(bline-110));

		fill(180);
		rect(60,145, 30,(bline-145));

		fill(150);
		rect(90,125, 35,(bline-125));

		fill(180);
		rect(120,180, 40,(bline-180));

		fill(150);
		rect(160,150, 60,(bline-150));
		rect(170,130, 40,40);
		rect(182,120, 15,30);

		fill(140);
		rect(220,100, 25,(bline-100));
		rect(225,87, 15, 40);
		triangle(227,87, 237,87, 232,70);

		fill(180);
		rect(245,120, 40,(bline-120));

	//treetops
	push();
		translate(200,260);
		scale(1);
		
	//vars for trees in front
		var x1, y1, w1, h1;
		x1= -100
		y1= 0
		w1= 70
		h1= 75

		var x2,y2,w2,h2;
		x2=10
		y2=0
		w2=80
		h2=75

		fill(255);
		ellipse(x1,y1,w1,h1);
		ellipse(x2,y2,w2,h2);

		fill(100,150,0);
		ellipse(-160,0, 75,70);

		fill(200,150,0);
		ellipse(-45,0, 60,65);

		fill(150,180,0);
		ellipse(60,0, 65,70);
		ellipse(160,0, 65);

		fill(0,50,0, 200);
		ellipse(x1,y1,w1,h1);
		ellipse(x2,y2,w2,h2);

	//trunks
		var t, b;
		t = 20;
		b = 90;
		fill(90,50,0);
		quad(-162,t, -167,b, -157,b, -157,t);
		quad(-162,55, -162,50, -170,40, -172,42);
		quad(-157,44, -157,47, -153,45, -152,42);

		quad(-102,t, -107,b, -95,b, -95,t);
		quad(-102,47, -102,45, -107,40, -107,43);
		quad(-95,40, -95,45, -90,40, -92,37);

		quad(-47,t, -50,b, -42,b, -42,t);
		quad(-47,40, -47,42, -55,38, -50,36);
		quad(-42,60, -42,65, -37,60, -39,55);

		quad(7,t, 5,b, 15,b, 13,t);
		quad(7,55, 7,60, -5,50, -3,47);
		quad(13,42, 13,47, 20,42, 20,37);

		quad(57,t, 55,b, 65,b, 62,t);
		quad(57,50, 57,55, 50,50, 52,47);
		quad(62,55, 62,57, 70,50, 67,47);

		quad(157,t, 155,b, 162,b, 162,t);
		quad(157,45, 157,50, 150,40, 150,35);
		quad(162,42, 162,45, 165,40, 165,37);
	pop();

	drawManandDog(walk_x,walk_y);

	walk_x -= .5
	walk_y += d_walk_y

	if (walk_y > 385){
		d_walk_y = -.2
	}
	if (walk_y < 375){
		d_walk_y = .2
	}
	if(walk_x < -50){
		walk_x = 950
		scale_man = .5
	}
	if(scale_man < 1){
		scale_man += .0004
	}

	drawBlueWave(wx1,0);
	drawBlueWave(wx1,200);

	wx1 += dwx1
	
	if (wx1> 20){
		dwx1 = -.2	
	}
	if (wx1 < -20){
		dwx1 = .2
	}
	
	drawWhiteWave(wx2,0);
	drawWhiteWave(wx2,200);
	wx2 += dwx2
	if(wx2 < -20){
		dwx2 = .2
	}
	if(wx2 > 20){
		dwx2 = -.2
	}

	push();

		translate(400, 0);

	//background
	   noStroke();
	   //fill(245, 245, 245, 200);
	   
	   strokeWeight(5);
	   fill(0);	   

	// Land Bush
		//fill(1, 179, 145);
		fill(102, 190, 175); //pale dark green
		rect(0, 45, 100, 30);
		rect(5, 37, 50, 20);
		ellipse(18, 49, 35, 20);

		//ellipse(50, 23, 20, 15);
		ellipse(53, 49, 40, 20);
		ellipse(55, 49, 40, 20);
		ellipse(37, 34, 20, 10);
		ellipse(43, 22, 20, 10);
		ellipse(58, 24, 20, 10);

		ellipse(65, 30, 35, 35);
		ellipse(75, 20, 10, 20);
		ellipse(82, 23, 20, 10);
		ellipse(93, 40, 25, 50);
		ellipse(95, 74, 47, 5);
		ellipse(93, 60, 33, 5);
		ellipse(93, 50, 34, 6);
		ellipse(93, 40, 34, 5);
		ellipse(93, 35, 25, 5);
		ellipse(99, 25, 25, 10);
		ellipse(104, 20, 5, 5);

		rect(55, 27, 40, 20);
		rect(40, 20, 15, 20);

		ellipse(20, 37, 5, 10);

		fill(255, 255, 255);
		ellipse(20, 47, 3, 5);
		ellipse(28, 40, 4, 8);
		ellipse(50, 35, 5, 3);
		ellipse(95, 27, 4, 6);

	drawBoat(boat_x);

		if(boat_x< -680)
			change_x= 1.5;

		if(boat_x >450)
			change_x= -1.5;

		boat_x+= change_x;

	drawBlueWave(wx1,0);
	drawBlueWave(wx1,200);

	wx1 += dwx1
	if (wx1> 20)
	{
		dwx1 = -.2	
	}
	if (wx1 < -20)
	{
		dwx1 = .2
	}

	drawWhiteWave(wx2,0);
	drawWhiteWave(wx2,200);

	wx2 += dwx2
	
	if(wx2 < -20){
		dwx2 = .2;
	}
	if(wx2 > 20){
		dwx2 = -.2;
	}

	drawFish(x,y);
	
	if(y> 700)
		change_f= -1;

	if(y<150)
		change_f= 1;

	y += change_f;


	//Sea Planktons
		noStroke();
		fill(41, 190, 179); //Blue
		ellipse(7, 380, 30, 40);
		ellipse(12, 345, 30, 40);
		ellipse(6, 310, 30, 40);

		fill(158, 107, 16, 220); // BrownGreen
		ellipse(20, 380, 30, 45);
		ellipse(24, 340, 30, 45);
		ellipse(27, 304, 30, 30);

		fill(158, 107, 16, 200);
		ellipse(53, 390, 25, 50);
		ellipse(55, 350, 25, 40);
		ellipse(55, 313, 25, 45);
		ellipse(56, 280, 25, 35);
		ellipse(57, 245, 25, 40);

		ellipse(77, 390, 20, 40);
		ellipse(77, 355, 25, 40);
		ellipse(76, 320, 25, 38);
		ellipse(77, 284, 25, 40);

		ellipse(94, 390, 15, 30);
		ellipse(94, 370, 15, 25);
		ellipse(94, 350, 15, 20);
		ellipse(94, 333, 15, 20);

		//fill(41, 190, 179, 150); //greenblue
		fill(18, 144, 141, 170);
		ellipse(120, 390, 20, 40);
		ellipse(120, 355, 20, 40);
		ellipse(120, 320, 20, 40);
		ellipse(120, 290, 15, 30);

		ellipse(139, 395, 20, 40);
		ellipse(139, 360, 20, 35);
		ellipse(139, 330, 20, 35);
		ellipse(139, 300, 20, 35);
		ellipse(139, 270, 20, 35);
		ellipse(139, 240, 20, 35);
		ellipse(139, 215, 15, 15);

		ellipse(170, 390, 20, 35);
		ellipse(170, 360, 20, 35);
		ellipse(170, 330, 20, 35);
		ellipse(170, 300, 20, 35);
		ellipse(170, 270, 20, 35);
			
		fill(158, 107, 16, 180); // BrownGreen
		ellipse(195, 387, 20, 35);
		ellipse(195, 355, 20, 35);

		fill(191, 158, 9, 180);
		ellipse(195, 325, 20, 35);
		ellipse(195, 295, 20, 35);
		ellipse(195, 265, 20, 35);

		fill(9, 133, 80, 180); // near eye plankton
		ellipse(210, 390, 20, 35);
		ellipse(210, 360, 20, 35);
		ellipse(210, 330, 20, 35);
		ellipse(210, 300, 20, 35);
		
		fill(47, 93, 56);
		fill(158, 107, 16, 180);
		ellipse(230, 390, 10, 35);
		ellipse(230, 360, 10, 35);
		ellipse(230, 330, 10, 35);
		ellipse(230, 300, 10, 30);
		ellipse(230, 270, 10, 30);
		ellipse(230, 240, 10, 30);

		ellipse(260, 390, 20, 35);
		ellipse(260, 360, 20, 35);
		fill(191, 158, 9, 180);
		ellipse(260, 330, 20, 35);
		ellipse(260, 300, 20, 35);
		ellipse(260, 270, 20, 35);
		ellipse(260, 240, 20, 35);

		fill(158, 107, 16, 180);
		ellipse(275, 390, 20, 35);
		ellipse(275, 360, 20, 35);

		fill(191, 158, 9, 180);
		
		ellipse(275, 330, 20, 35);
		ellipse(275, 300, 20, 35);
		
		fill(41, 190, 179, 180); //Blue
		ellipse(325, 390, 20, 35);
		ellipse(325, 360, 20, 35);
		ellipse(325, 330, 20, 35);
		ellipse(325, 300, 20, 35);
		ellipse(325, 270, 20, 35);
		ellipse(325, 240, 20, 35);

		fill(158, 107, 16, 220); // BrownGreen
		ellipse(337, 385, 20, 40);
		ellipse(337, 360, 20, 40);
		ellipse(337, 340, 20, 40);
		ellipse(337, 310, 20, 40);
		ellipse(337, 280, 20, 40);
		ellipse(337, 255, 20, 40);

		fill(41, 190, 179, 180); //Blue
		ellipse(360, 390, 20, 35);
		ellipse(360, 360, 20, 35);
		ellipse(360, 330, 20, 35);
		ellipse(360, 300, 20, 35);
		ellipse(360, 270, 20, 35);
		ellipse(360, 240, 20, 35);
	
		ellipse(380, 390, 20, 35);
		ellipse(380, 360, 20, 35);
		fill(158, 107, 16, 180);
		ellipse(380, 330, 20, 35);
		ellipse(380, 300, 20, 35);
		
		fill(158, 107, 16, 220); // BrownGreen
		ellipse(380, 390, 20, 35);
		fill(158, 107, 16, 180);
		ellipse(380, 360, 20, 35);
		ellipse(380, 330, 20, 35);

		ellipse(395, 385, 10, 40);
		ellipse(395, 360, 10, 40);
		fill(158, 107, 16, 180);
		ellipse(395, 340, 10, 40);
		ellipse(395, 320, 10, 40);
		ellipse(395, 310, 10, 40);

		pop();
	}

function drawManandDog(walk_x, walk_y)
{
	push();
	scale(scale_man);
	push();
		translate((1/scale_man)*walk_x, (1/scale_man)*walk_y);
		scale(.7);

	//diving helmet
		fill(255);
		ellipse(32, -285, 50);
		fill(80,50,0);

	//feet
		triangle(0,0, 10,0, 10,-5);
		triangle(65,-5, 73,-10, 70,-12);

	//legs
		quad(10, 0, 17,-90, 12, -90, 7, 0);
		quad(73,-10, 45,-90, 38,-90, 70,-10);
		
	//jacket
		quad(0,-80, 50,-80, 50,-270, 30,-260);
		
	//face
		stroke(0)
		line(30,-265, 22,-285);
		line(22,-285, 10,-285);
		line(10,-285, 20,-297);
		noFill();
		arc(32,-295, 10, 10, 2*PI/8, 7*PI/8);
		arc(25,-285, 30, 20, 1*PI/8, 4*PI/8);
		fill(255, 100, 180);
		noStroke();
		ellipse(42,-282, 5);
		
	//helmet detail
		stroke(0, 150, 150);
		line(25,-300, 40,-290);
		line(25, -290, 40,-280);
		
	//hair
		fill(0);
		noStroke();
		triangle(40,-275, 50,-300, 50,-272);
		
	//hat
		stroke(80,50,0);
		strokeWeight(2);
		line(15,-305, 55,-290);
		fill(80,50,0);
		triangle(22,-303, 50,-295, 35,-315);
		triangle(22,-303, 50,-292, 55,-310);
		
	//arm
		stroke(80,50,0);
		strokeWeight(5);
		noFill();
		arc(35,-200, 60,100, 3*PI/2, PI/2);
		fill(255);
		noStroke()
		ellipse(45,-150, 10);
		
	//leash
		noFill();
		stroke(80,50,0);
		strokeWeight(1);
		var lx, ly, lw, lh;
		lx=-190
		ly=-120
		lw=450
		lh=230
		arc(lx, ly, lw, lh, 0, 4*PI/8);
	pop();

	push();
		translate((1/scale_man)*walk_x-200, (1/scale_man)*walk_y -265);
		scale(.7);
		//helmet
		fill(255);
		ellipse(85, 370, 50, 40);
		//dog head
		fill(255, 230, 165);
		ellipse(92, 370, 20);
		triangle(100, 380, 83, 365, 70, 385);
		//body + legs
		ellipse(120,375, 50,20);
		stroke(255,230,165);
		strokeWeight(2);
		line(100,380, 95,390);
		line(103,380, 100,393);
		line(137,380, 137,393);
		line(142,380, 143,393);
		//feet
		noStroke()
		fill(80,50,0);
		ellipse(93,390, 3);
		ellipse(98,393, 3);
		ellipse(135,393, 3);
		ellipse(141,393, 3);
		//face
		ellipse(72,383, 5); //nose
		stroke(80,50,0);
		strokeWeight(1);
		noFill();
		arc(90,376, 10,10, PI/4, PI/2); //smile
		arc(80,370, 5,5, 3*PI/8, 6*PI/8); //right eye
		arc(85,372, 5,5, 3*PI/8, 6*PI/8); //left eye
		stroke(255,230,165);
		fill(80,50,0);
		bezier(87,360, 92,360, 83,350, 87,360);
		bezier(95,360, 100,360, 97,350, 95,360);
		//helmet detail
		stroke(0,150,150);
		line(70,360, 90,370);
		line(70,370, 90,380);
		//collar
		noStroke();
		fill(150,0,0);
		quad(100,368, 97,380, 99,380, 102,368);
	pop();
	pop();
}

function drawBlueWave(wx1,y)
{	// Waves Blue
	strokeWeight(1);
		stroke(85, 173, 232);
		
	push();
		translate(wx1,y);
		line(0, 90, 20, 90);
		line(40, 90, 60, 90);
		line(80, 90, 100, 90);
		line(120, 90, 140, 90);
		line(160, 90, 180, 90);
		line(200, 90, 220, 90);
		line(240, 90, 260, 90);
		line(280, 90, 300, 90);
		line(320, 90, 340, 90);
		line(360, 90, 380, 90);

		line(0, 120, 20, 120);
		line(40, 120, 60, 120);
		line(80, 120, 100, 120);
		line(120, 120, 140, 120);
		line(160, 120, 180, 120);
		line(200, 120, 220, 120);
		line(240, 120, 260, 120);
		line(280, 120, 300, 120);
		line(320, 120, 340, 120);
		line(360, 120, 380, 120);

		line(0, 150, 20, 150);
		line(40, 150, 60, 150);
		line(80, 150, 100, 150);
		line(120, 150, 140, 150);
		line(160, 150, 180, 150);
		line(200, 150, 220, 150);
		line(240, 150, 260, 150);
		line(280, 150, 300, 150);
		line(320, 150, 340, 150);
		line(360, 150, 380, 150);

		line(0, 180, 20, 180);
		line(40, 180, 60, 180);
		line(80, 180, 100, 180);
		line(120, 180, 140, 180);
		line(160, 180, 180, 180);
		line(200, 180, 220, 180);
		line(240, 180, 260, 180);
		line(280, 180, 300, 180);
		line(320, 180, 340, 180);
		line(360, 180, 380, 180);

		line(0, 210, 20, 210);
		line(40, 210, 60, 210);
		line(80, 210, 100, 210);
		line(120, 210, 140, 210);
		line(160, 210, 180, 210);
		line(200, 210, 220, 210);
		line(240, 210, 260, 210);
		line(280, 210, 300, 210);
		line(320, 210, 340, 210);
		line(360, 210, 380, 210);

		line(0, 240, 20, 240);
		line(40, 240, 60, 240);
		line(80, 240, 100, 240);
		line(120, 240, 140, 240);
		line(160, 240, 180, 240);
		line(200, 240, 220, 240);
		line(240, 240, 260, 240);
		line(280, 240, 300, 240);
		line(320, 240, 340, 240);
		line(360, 240, 380, 240);

		line(0, 270, 20, 270);
		line(40, 270, 60, 270);
		line(80, 270, 100, 270);
		line(120, 270, 140, 270);
		line(160, 270, 180, 270);
		line(200, 270, 220, 270);
		line(240, 270, 260, 270);
		line(280, 270, 300, 270);
		line(320, 270, 340, 270);
		line(360, 270, 380, 270);
	pop();
}

function drawWhiteWave(wx2, y)
{
	//waves white
	push();
		translate(wx2,y);
		stroke(245, 245, 245);
		line(0, 100, 20, 100);
		line(40, 100, 60, 100);
		line(80, 100, 100, 100);
		line(120, 100, 140, 100);
		line(160, 100, 180, 100);
		line(200, 100, 220, 100);
		line(240, 100, 260, 100);
		line(280, 100, 300, 100);
		line(320, 100, 340, 100);
		line(360, 100, 380, 100);

		line(0, 130, 20, 130);
		line(40, 130, 60, 130);
		line(80, 130, 100, 130);
		line(120, 130, 140, 130);
		line(160, 130, 180, 130);
		line(200, 130, 220, 130);
		line(240, 130, 260, 130);
		line(280, 130, 300, 130);
		line(320, 130, 340, 130);
		line(360, 130, 380, 130);

		line(0, 160, 20, 160);
		line(40, 160, 60, 160);
		line(80, 160, 100, 160);
		line(120, 160, 140, 160);
		line(160, 160, 180, 160);
		line(200, 160, 220, 160);
		line(240, 160, 260, 160);
		line(280, 160, 300, 160);
		line(320, 160, 340, 160);
		line(360, 160, 380, 160);

		line(0, 190, 20, 190);
		line(40, 190, 60, 190);
		line(80, 190, 100, 190);
		line(120, 190, 140, 190);
		line(160, 190, 180, 190);
		line(200, 190, 220, 190);
		line(240, 190, 260, 190);
		line(280, 190, 300, 190);
		line(320, 190, 340, 190);
		line(360, 190, 380, 190);

		line(0, 220, 20, 220);
		line(40, 220, 60, 220);
		line(80, 220, 100, 220);
		line(120, 220, 140, 220);
		line(160, 220, 180, 220);
		line(200, 220, 220, 220);
		line(240, 220, 260, 220);
		line(280, 220, 300, 220);
		line(320, 220, 340, 220);
		line(360, 220, 380, 220);

		line(0, 250, 20, 250);
		line(40, 250, 60, 250);
		line(80, 250, 100, 250);
		line(120, 250, 140, 250);
		line(160, 250, 180, 250);
		line(200, 250, 220, 250);
		line(240, 250, 260, 250);
		line(280, 250, 300, 250);
		line(320, 250, 340, 250);
		line(360, 250, 380, 250);

		line(0, 280, 20, 280);
		line(40, 280, 60, 280);
		line(80, 280, 100, 280);
		line(120, 280, 140, 280);
		line(160, 280, 180, 280);
		line(200, 280, 220, 280);
		line(240, 280, 260, 280);
		line(280, 280, 300, 280);
		line(320, 280, 340, 280);
		line(360, 280, 380, 280);

		line(0, 300, 20, 300);
		line(40, 300, 60, 300);
		line(80, 300, 100, 300);
		line(120, 300, 140, 300);
		line(160, 300, 180, 300);
		line(200, 300, 220, 300);
		line(240, 300, 260, 300);
		line(280, 300, 300, 300);
		line(320, 300, 340, 300);
		line(360, 300, 380, 300);
	pop();
}

function drawFish(x,y)
{
	// Fish

		push();
		translate(x,y);
		scale(sc);
		fill(255, 255, 255, 230);
		ellipse(0, 0, 330, 135);

		fill(164, 242, 223, 200);
		ellipse(66, 0, 330, 135);

		stroke(30, 91, 178, 180);
		strokeWeight(5);
		fill(255, 255, 255, 230);
		arc(-94, 0, 220, 80, 3*PI/2, PI/2);
		arc(-114, 0, 200, 60, 11*PI/6, PI/5);
		arc(-124, 0, 170, 40, 11*PI/6, PI/5);

		stroke(255, 255, 255);
		triangle(-170, 20, -146, 10, -146, 30);
		triangle(-184, 0, -145, -30, -145, 0);

		ellipse(36, -84, 20, 40);


		fill(9, 133, 80, 180);
		ellipse(-144, -2, 15, 15);
		pop();
}

function drawBoat(boat_x)
{
	// Boat

		push();
		translate(boat_x, 0);

	// Top
		noStroke();
		fill(215, 20, 0);
		ellipse(265, 99, 3, 7);
		ellipse(265, 107, 12, 7);
		ellipse(266, 114, 3, 7);
  
	//Man
		fill(17, 92, 255); //Dark Blue
		rect(139, 76, 10, 13);
		fill(17, 210, 255); //Light Blue
		rect(142, 76, 6, 7);

		fill(197, 177, 0);
		ellipse(145, 73, 8, 8);
		ellipse(140, 73, 3, 4);

	// Boat
		fill(215, 20, 0, 190); //orange
		ellipse(135, 95, 85, 20);
		stroke(201, 110, 15);
		line(150, 85, 205, 42);

	// String
		stroke(36, 64, 255);
		strokeWeight(0.1);
		line(143, 85, 157, 72)
		stroke(60, 60, 200);
		ellipse(158, 72, 2, 1);

	// string fishing
		stroke(112, 165, 255);
		strokeWeight(0.8);
		noFill();
		arc(265, 43, 120, 115, PI/2, PI);	

	pop();
}