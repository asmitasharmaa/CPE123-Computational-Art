var x=160, y= 200;
var sc=0.7;
var bool= false;
var cx=0, cy=0, w=400, h=30;
var c1;
var c2;
var ic= 0.5;
var res= 80;

function setup()
{
    colorMode(RGB);
	createCanvas(400,400);
	frameRate(5);
	c1= color(250, 250, 250);
    c2= color(20, 20, 20);
}

function draw()
{
	background(220, 220, 220);
	
	//backgrounds
		push();
		noStroke();
		fill(67, 69, 66);
		quad(0, 400, 0, 300, 400, 255, 400, 400);

		gradient(c1, c2, res);

		fill(148, 153, 145);
		//triangle(0, 258, 216, 275, 0, 300);

		fill(30, 30, 30);
		quad(0, 400, 0, 350, 400, 360, 400, 400);

		beginShape();
		fill(49, 51, 49);
		curveVertex(0, 400);
		curveVertex(0, 353); 
		curveVertex(55, 357); 
		curveVertex(224, 328);
		curveVertex(253, 291);
		curveVertex(323, 318);
		curveVertex(400, 280);
		curveVertex(400, 400);
		curveVertex(0, 400);
		endShape();
		pop();

	//Face
		fill(0);
		bezier(120, 260, 100, 260, 50, 110, 110, 100);

		fill(30, 30, 30, 240);
		quad(188, 100, 206, 105, 210, 232, 188, 232);
		fill(220, 220, 220, 200);
		fill(220, 220, 220, 200);
		arc(230, 149, 10, 10, PI/2, 3*PI/2);
		fill(0);
		quad(206, 115, 228, 128, 230, 240, 198, 232);

		push();
		stroke(17, 58, 90);
		line(190, 130, 200, 130);
		line(190, 150, 200, 150);
		line(190, 170, 200, 170);
		line(190, 190, 200, 190);
		line(190, 210, 200, 210);
		pop();

	//Nose
		fill(0);
		bezier(222, 194, 279, 191, 207, 163, 230, 147);

	//Mouth
		push();
		fill(130);
		noStroke();
		triangle(228, 193, 231, 205, 233, 200);
		triangle(230, 206, 220, 209, 230, 214);	

		noStroke();
		fill(220, 220, 220);
		
		//arc(231, 139, 13, 13, PI/2, 3*PI/2);
		//arc(235, 225, 15, 15, PI/2, 3*PI/2);

		pop();
		fill(20, 20, 20);
		triangle(232, 149, 227, 156, 223, 135);

		fill(0)
		ellipse(213, 233, 38, 30);

		push();
		noStroke();
		//fill(250, 250, 250);
		//triangle(198, 248, 195, 252, 220, 254);
		pop();
		
	//Buildings
		fill(80, 80, 80);
		rect(110, 191, 10, 68);

		fill(40, 40, 40);
		quad(108, 99, 98, 106, 106, 213, 116, 195);
		
		fill(150, 150, 150);
		line(102, 116, 110, 116);
		line(102, 125, 110, 125);
		line(102, 135, 110, 135);
		line(102, 150, 110, 150);
		line(102, 165, 110, 165);
		line(102, 180, 110, 180);

		fill(51, 44, 36); // Brown Black
		quad(121, 190, 130, 195, 130, 259, 122, 259);

		fill(145, 135, 124); // blue black
		quad(130,188,135, 191, 133, 262, 127, 264);
		rect(131, 178, 0.5, 10);

		fill(35, 46, 26); //Green black
		rect(133, 227, 5, 35);

		fill(50, 50, 50, 250); //blacky
		rect(182, 213, 15, 25);

		fill(42, 35, 51); // purple black
		rect(168, 225, 20, 25);

		fill(0);
		rect(165, 245, 18, 13);

		line(175, 215, 175, 224);
		ellipse(175, 215, 2);

		fill(255, 255, 0);
		line(185, 128, 187, 128);
		ellipse(185, 128, 2);
		line(185, 138, 187, 138);
		ellipse(185, 138, 2);
		line(185, 148, 187, 148);
		ellipse(185, 148, 2);
		line(185, 158, 187, 158);
		ellipse(185, 158, 2);
		line(185, 168, 187, 168);
		ellipse(185, 168, 2);
		line(185, 178, 187, 178);
		ellipse(185, 178, 2);
		line(185, 188, 187, 188);
		ellipse(185, 188, 2);

	//Body
	
		fill(0);	
		quad(130, 260, 90, 255, 90, 267, 120, 270);
		bezier(109, 266, 76, 288, 38, 365 ,65, 397);

		bezier(240, 140, 245, 104, 225, 104, 190, 104);
		
		fill(0);
		beginShape();

		curveVertex(218, 252);
		curveVertex(197, 237);
		curveVertex(187, 246);
		curveVertex(188, 259);
		curveVertex(173, 274);
		curveVertex(166, 279);
		curveVertex(165, 285);
		curveVertex(186, 293);
		curveVertex(185, 297);
		curveVertex(201, 302);
		curveVertex(204, 305);
		curveVertex(206, 316);
		curveVertex(210, 333);
		curveVertex(206, 345);
		curveVertex(218, 356);
		curveVertex(222, 369);
		curveVertex(226, 381);
		curveVertex(233, 392);
		curveVertex(233, 396);
		curveVertex(146, 392);
		curveVertex(104, 393);
		curveVertex(65, 396);
		curveVertex(63, 395);
		curveVertex(96, 301);
		curveVertex(218, 252);

		endShape();

		ellipse(109, 283, 40, 40);

	//Mouse Hover for visible coordinates
	/*push();
		fill(150, 50, 90);
		textSize(20);
		textAlign(CENTER);
		text("("+ floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY-10);
	pop(); 
	*/
		fill(0);

		if(bool== false)
			{
				quad(107, 99, 187, 99, 196, 236, 119, 289);
				quad(96, 108, 106, 101, 124, 254, 111, 258);
				quad(184, 98, 209, 117, 200, 236, 183, 227);
				ellipse(145, 101, 80, 20);
			}

		else 
		{
			birds(x, y); //Calling the function
			//Road
				fill(62, 66, 64);
				quad(76, 396, 130, 289, 142, 283, 95, 395);

				fill(230, 230, 230);
				line(89, 382, 94, 371);
				line(101, 360, 106, 349);
				line(113, 333, 119, 320);
				line(125, 308, 130, 298);

				fill(62, 66, 64);
				line(160, 250, 160, 265);
				fill(240, 0, 0);
				ellipse(160.5, 250, 2, 2);
		}
}

function birds(x,y)
{
	for(var i=0; i< 25; i++)
		{	
			push();
			translate(x,y);
			scale(sc);
	
		 	ellipse(0, 0, 2, 10);
			triangle(-6, -3, -15, 3, 0, 0);
			triangle(6, -3, 15, 3, 0, 0);
			triangle(0, 1, -3, 4, 3, 4);

			x= random(118, 190);
			y= random(20, 200);
			pop();
		}
}

//Mouse Moved
function mouseClicked()
{
	if(mouseX>90 && mouseX <220 && mouseY>100 && mouseY< 255)
		bool= true;
	push();

		translate(mouseX,mouseY);
		ellipse(0, 0, 2, 10);
		triangle(-6, -3, -15, 3, 0, 0);
		triangle(6, -3, 15, 3, 0, 0);
		triangle(0, 1, -3, 4, 3, 4);
		x= random(118, 190);
		y= random(20, 200);
	pop();
} 

function gradient(c1, c2, res)
{
	for(var i=0; i< res; i++)
	{
		var w=400, h=height/res;

		noStroke();
		fill(lerpColor(c1, c2, i/res));
		rect(0, i*h, w, h);

	}

}







