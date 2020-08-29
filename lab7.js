var c1, c2, res;
var numleaf;
var rot, sc;
var lx=[], ly=[];
var lnx=[], lny=[];
var bx=[];
var by=[];
var x, y;
var c;
var leafrot=[];
var leafsize=[];
var rad;
var rotb, scb, radb;
var size;
var dx=[],dy=[];


function setup()
{
	createCanvas(500, 300);
	c1= color(126, 240, 243);
	c2= color(227, 224, 216);
	numleaf=20;
	res=200;
	size=23;

	frameRate(20);
	

	for(var i=0; i<500; i+=40)
	{
		for(var j=0; j<150; j+=40)
		{
			lx.push(i+390);
			ly.push(j/2);
			lnx.push(i+380);
			lny.push(j/2);
			leafrot.push(random(2*PI));
			leafsize.push(random(0.5, 2));
		}
	}

	for(var i=0; i<5; i++)
	{
		bx.push(random(50,400));
		by.push(random(50, 250));
		dx.push(-0.5, 0.9);
		dy.push(-0.5, 0.9);
	}

	
	
}

function draw()
{
	//noLoop();

	gradient(c1, c2, res);


	for(var i=0; i<lx.length; i++)
	{
		leafline(lx[i], ly[i], leafrot[i], leafsize[i]);

		leafnoline(lnx[i], lny[i], leafrot[i], leafsize[i]);
	}

	leafline(80, 10, -PI/3, 1);
	leafnoline(20, 10, -PI/2, 1.5);
	leafnoline(125, 35, PI/3, 0.7);
	
	leafline(100, -30, PI/3, 3); //big
	leafline(50, 10, PI/10, 1.25);
	leafline(30, 5, -PI/5, 1.5);
	leafline(-15, 130, -PI/2, 0.7);
	leafline(510, 140, PI/5, 1.5);

	tree();

	fruits(182, 250, 35, color(255, 200, 10)); // orange
	fruits(160, 260, 35, color(255, 230, 20)); // yellow
	fruits(220, 245, 50, color(255, 230, 20));	

	fruitb(290, 210, 50, color(255, 230, 20));
	fruitb(365, 200, 60, color(255, 180, 10)); //orange
	fruitb(345, 190, 60, color(255, 220, 80));
	fruitb(395, 145, 50, color(255, 230, 30));

	leafline(340, 100, -PI/3, 1);
	leafline(295, 5, 0, 0.5);
	leafline(285, 50, -5*PI/4, 0.5);
	leafline(290, 35, 5*PI/6, 0.5);
	leafline(350, 150, -PI/8, 0.7);
	leafline(355, 160, PI/3, 0.6);

	ant();

	for(var i=0; i<5; i++)
	{	
		butterfly(bx[i], by[i], size, random(2*PI), 0);

		bx[i]+=dx[i];
		by[i]+=dy[i];

		if(bx[i]>= width || bx[i]<=0)
			dx[i]=-dx[i];

		if(by[i]>= height || by[i]<=0)
			dy[i]=-dy[i];

	}

	/*Mouse Hover for visible coordinates
	push();
		fill(150, 50, 90);
		textSize(20);
		textAlign(CENTER);
		text("("+ floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY-10);
	pop(); 
	*/
	
}

function ant()
{
	scale(1);
	fill(0);
	//rotate(PI/6);
	arc(270, 140, 10, 25, PI, 2*PI);
	ellipse(281, 133, 7, 3);
	arc(288, 130, 10, 7, PI, 2*PI);

	leafline(295, 130, PI, 0.4);
}

function butterfly(x, y, radb, rotb, scb)
{	
	//fill(random(150, 255), random(50,100), random(100));
	fill(150, 50, 90);
	triangle(x, y+20, x-30, y+5, x-10, y-5);
	triangle(x-2, y+20, x+30, y+5, x+10, y-5);

	fill(random(240, 255), random(150), random(200));
	ellipse(x-20, y, radb);
	ellipse(x+20, y, radb);

	fill(random(150, 255), random(50), random(50,100));
	ellipse(x-20, y, radb/2);
	ellipse(x+20, y, radb/2);

	fill(0);
	ellipse(x, y+15, 5, 10);

}

function leafline(x, y, rot, sc)
{
	push();
		translate(x,y);
		rotate(rot);
		scale(sc);
		fill(random(130,135), random(15,20), random(80, 85));
		beginShape();
		curveVertex(0, 0);
		curveVertex(-5, 20);
		curveVertex(-9, 30);
		curveVertex(-10, 40);
		curveVertex(-5, 56);
		curveVertex(0, 65);
		curveVertex(5, 56);
		curveVertex(10, 40);
		curveVertex(9, 30);
		curveVertex(5, 20);
		curveVertex(0, 0);
		endShape();

		triangle(0, 10, -5.1, 20.5, 5.1, 20.5);
		
		stroke(190, 190, 195);
		strokeWeight(0.5);
		line(0, 10, -0.5, 65); 

		//left
		line(0, 20, -9, 30);
		line(0, 30, -10, 40);
		line(0, 40, -7, 50);
		line(0, 50, -3, 60);

		//right
		line(0, 15, 7, 25);
		line(0, 25, 10, 35);
		line(0, 35, 8, 45);
		line(0, 45, 5, 55);
		line(0, 55, 2.5, 60);

	pop();

}

function leafnoline(x, y, rot, sc)
{
	push();
		translate(x,y);
		rotate(rot);
		scale(sc);
		fill(random(90,95), random(15,20), random(40, 45));
		beginShape();
			curveVertex(0, 0);
			curveVertex(-5, 20);
			curveVertex(-9, 30);
			curveVertex(-10, 40);
			curveVertex(-5, 56);
			curveVertex(0, 65);
			curveVertex(5, 56);
			curveVertex(10, 40);
			curveVertex(9, 30);
			curveVertex(5, 20);
			curveVertex(0, 0);
		endShape();
		triangle(0, 10, -5.1, 20.5, 5.1, 20.5);
	pop();

}

function tree()
{
	fill(140, 65, 20);
	quad(500, 60, 290, 97, 293, 97, 500, 75);

	quad(355, 88, 365, 89, 286, 46, 285, 48);

	quad(392, 81, 400, 83, 242, 159, 240, 156);

	beginShape();
        vertex(305, 150);
        curveVertex(305, 120);
        curveVertex(264, 176);
        curveVertex(166, 205);
        curveVertex(150, 210); 
        curveVertex(160, 205);
        curveVertex(205, 198);
        curveVertex(250, 177);
        curveVertex(276, 158);
        curveVertex(283, 151);
        curveVertex(285, 148);
        curveVertex(295, 133);
        curveVertex(310, 120);
    endShape();

	quad(301, 56, 302, 55, 293, 25, 292, 25);

	quad(226, 189, 223, 192, 178, 189, 182, 187);

	quad(252, 149, 250, 149, 226, 133, 227, 133);

	leafline(233, 140, 5*PI/6, 0.5);
	leafline(177, 185, 5*PI/6, 0.3);
	leafline(195, 186, 5*PI/6, 0.3);
	leafline(180, 183, 5*PI/5, 0.2);

	leafline(150, 207, 5*PI/7, 0.3);
	leafline(148, 210, PI/2, 0.3);

	ellipse(390, 78, 15, 20);

}

function fruits(x, y, rad, c)
{
	stroke(120, 56, 0);
	line(x, y-50, x, y-10);
	noStroke();
	fill(c);
	ellipse(x, y, rad, rad+3);

}

function fruitb(x, y, rad, c)
{
	stroke(120, 56, 0);
	line(x, y-80, x, y);
	noStroke();
	fill(c);
	ellipse(x, y, rad, rad+3);
}

function gradient(c1, c2, res)
{
	for(var i=0; i< res; i++)
	{
		var w=width, h=height/res;
		noStroke();
		fill(lerpColor(c1, c2, i/res));
		rect(0, i*h, w, h);

	}

}