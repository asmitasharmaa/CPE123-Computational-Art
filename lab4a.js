var c1, c2, res;
var xb, yb, sc;
var xp, yp, s, d, rot;
var r, g, b;
var xt, yt;


function setup()
{
	colorMode(RGB);
    createCanvas(400, 400);

    frameRate(0.5);
    c1= color(247, 188, 21);
    c2= color(255, 107, 0);
    res= 80;
    r= random(255);
    g= random(255);
    b= random(255);
    xp= random(30, 400);
    yp= random(315, 400);
    d= 30;
    s= 1;
    xt= 350;
    yt= 400;
    //noLoop();

} 


function draw()
{
	
	background(100, 100, 100);
	gradient(c2, c1, res);
	fill(240, 240, 240);
	ellipse(300, 110, 180, 200);

	fill(200);
	ellipse(270, 52, 50, 70);
	ellipse(249, 71, 50, 50);
	ellipse(285, 85, 40, 60);

	ellipse(229, 142, 30);
	ellipse(236, 155, 30);
	ellipse(242, 164, 30);
	ellipse(250, 174, 30);

	textSize(50);
	
	fill(0);
	textFont('Chiller');
	text('Happy', 90, 50);
	text('Halloween', 90, 90);

	hill();
	house();
	tree(xt, yt);

	for(var i=0; i< 15; i++)
	{
		pumpkin(xp, yp, sc, d, rot, r, g, b);
		
    	xp= random(400);
    	yp= random(350, 400);
    	d= random(25, 50);
    	rot= random(7*PI/6);
	}
	
	birds(240, 84);
	windows();

	//Mouse Hover for visible coordinates
   /* push();
        fill(150, 50, 90);
        textSize(20);
        textAlign(CENTER);
        text("("+ floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY-10);
    pop();
   */
}


function hill()
{
	// Black hill

	fill(0);

	beginShape();
	curveVertex(0, 400);
	curveVertex(0, 345);
	curveVertex(40, 320);
	curveVertex(75, 307);
	curveVertex(111, 303);
	curveVertex(154, 321);
	curveVertex(210, 342);
	curveVertex(323, 410);
	curveVertex(0, 410);
	curveVertex(0, 335);
	endShape();

}


function house()
{

	fill(0);
	quad(45, 329, 26, 240, 59, 228, 76, 310);
	quad(59, 227, 106, 233, 108, 310, 60, 307);
	quad(26, 242, 17, 210, 34, 197, 46, 233);
	quad(56, 230, 42, 162, 73, 159, 82, 230);
	quad(88, 299, 92, 192, 111, 196, 106, 233);

	quad(36, 135, 21, 112, 31, 106, 41, 129);
	quad(59, 121, 69, 103, 76, 111, 64, 131);


	triangle(10, 219, 11, 141, 39, 196);
	triangle(32, 167, 43, 85, 82, 162);
	triangle(85, 195, 111, 140, 116, 210);

	triangle(15, 117, 14, 92, 36, 103);
	triangle(62, 101, 79, 97, 79, 117);
}


function birds(xb,yb)
{
	for(var i=0; i< 7; i++)
		{	
			push();
			translate(xb,yb);
			scale(random(0.5,3));
	
		 	ellipse(0, 0, 2, 10);
			triangle(-6, -3, -15, 3, 0, 0);
			triangle(6, -3, 15, 3, 0, 0);
			triangle(0, 1, -3, 4, 3, 4);

			xb= random(200, 380);
			yb= random(60, 180);
			pop();
		}
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

function pumpkin(xp, yp, s, d, rot, r, g, b)
{
	push();
	translate(xp, yp);
	rotate(rot);
	scale(s);

	r= random(100,255);
    g= random(150);
    b= random(1);


	fill(r, g, b);
	rect(-2, -25, 3, 15);
	ellipse(0, 0, d);
	fill(255, 255, 0);
	triangle(-10, -5, -5, -5, -8, -10);
	triangle(10, -5, 5, -5, 8, -10);
	triangle(-5, 5, 5, 5, 0, 10);
	pop();

}

function mouseClicked()
{
	d= random(25, 50);
    rot = 0;
	pumpkin(mouseX, mouseY, s, d, rot, r, g, b);
}

function tree(xt, yt)
{
	push();
		fill(30);
		strokeWeight(7);
		beginShape();
			curveVertex(340, 359);
			curveVertex(353, 330);
			curveVertex(365, 306);
			curveVertex(345, 294);
			curveVertex(337, 267);
			curveVertex(325, 233);
			curveVertex(341, 221);
			curveVertex(350, 239);
			curveVertex(353, 285);
			curveVertex(349, 309);
			curveVertex(345, 365);
			curveVertex(360, 367);
			curveVertex(354, 400);
			curveVertex(340, 359);
			
			endShape();
	pop();
			quad(335, 400, 338, 294, 350, 259, 350, 401);
			triangle(349, 359,347, 400, 368, 400);
			
			triangle(265, 214, 326, 239, 328, 227);
			triangle(292, 218, 269, 162, 286, 217);
			triangle(278, 186, 302, 146, 278, 190);
			triangle(334, 220, 348, 169, 337, 222);
			triangle(341, 193, 316, 175, 340, 197);
			triangle(330, 179, 346, 130, 330, 185);
			triangle(292, 161, 269, 107, 294, 154);
			triangle(288, 166, 322, 138, 290, 167);
			triangle(342, 221, 380, 179, 345, 225);
			triangle(305, 227, 278, 242, 308, 229);
			triangle(370, 187, 360, 142, 373, 187);
			triangle(340, 141, 328, 99, 343, 141);
			triangle(282, 133, 297, 90, 285, 129);
			triangle(334, 119, 360, 87, 334, 121);
			triangle(357, 206, 388, 200, 355, 210);
			triangle(366, 162, 390, 123, 367, 164);		
}

function windows()
{
	fill(255, 255, 0);
	arc(73, 297, 30, 60, PI, 0);

	arc(30, 218, 10, 30, PI, 0);
	arc(64, 195, 10, 30, PI, 0);
	arc(99, 215, 10, 30, PI, 0);

	ellipse(30, 115, 5, 5);
	ellipse(68, 115, 5, 5);

	fill(0);
}
