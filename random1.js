var x, y, w, h;
var r, g, b;
var dx1, dy1, dx2, dy2;
var bool=false;
var c1, c2, res;
var ct=false;


function setup()
{
	colorMode(RGB);
	createCanvas(600, 600);
	frameRate(1);
	c1=color(240, 240, 37);
	c2=color(243, 70, 0);
	res=150;
	//noLoop();
}

function draw()
{
 if(!bool)
 {
	background(100, 240, 190);
	fill(230, 230, 0);
	rect(280, 0, 40, height);
	rect(0, 280, width, 40);

	push();
	noStroke();
	fill(243, 16, 95);
	ellipse(200, 300, 190, 100);
	ellipse(400, 300, 190, 100);
	ellipse(width/2, height/2, 50);

	triangle(width/2, height/2, 200, 400, 260, 450);
	triangle(width/2, height/2, 400, 400, 340, 450);

	fill(255);
	ellipse(width/2, height/2, 20);
	pop();
	textSize(20);
	fill(110, 50, 230);
	textFont('Arial');
	text('Click on your name!', 230, 250);

	push();
	fill(255);
	translate(250, 150);
	rotate(-5*PI/4);
	rect(0, 0, 150, 150);
	pop();

	textSize(30);
	fill(0);
	textStyle(BOLD);
	textFont('Chiller');
	text('TO', 130, 130);
	text('Mummy & Papa', 80, 170);
	
}

 else
 { background(243, 240, 41);
 	
 	push();
 	noStroke();
 	gradient(c1, c2, res);
 	pop();

	textSize(100);
	fill(0);
	textStyle(BOLD);
	textFont('Chiller');
	text('Happy 20TH', width/2 -150, 100);
	text('Anniversary!', width/2 -150, 200);

	cake();
	candle();
	

	textSize(30);
	fill(0);
	textStyle(BOLD);
	textFont('Chiller');
	text('Click on Candle!', width/2 -80, 550);
	
	for(var i=0; i< 10; i++)
	{
		balloon(random(10, width/4),
			random(10, height),
			random(30, 70),
			random(50, 70),
			random(50, 255),
			random(30, 255),
			random(30, 255)
			);
	}

	for(var i=0; i< 10; i++)
	{
		balloon(random(3*width/4, width),
			random(10, height),
			random(30, 70),
			random(50, 70),
			random(50, 255),
			random(30, 255),
			random(30, 255)
			);
	}
 }

}

function cake()
{
	fill(255);
	rect(200, 440, 200, 200);

	fill(243, 118, 161);
	ellipse(300, 440, 210, 30);
	fill(100);
	ellipse(300, 600, 220, 15);

	textSize(50);
	fill(0);
	textStyle(BOLD);
	textFont('Chiller');
	text('20TH', width/2 -50, 500);
	
}

function candle()
{
	fill(215, 232, 210);
	rect(280, 360, 40, 80);


	if(!ct)
	{
		fill(255, 255, 0);
		ellipse(300, 350, 20, 50);
		fill(0, 0, 250);
		ellipse(300, 365, 10, 30);

	}

	else
	{	
		fill(0);
		line(300, 330, 300, 360);

		push();
		textSize(random(20,50));
		fill(0);
		textStyle(BOLD);
		textFont('Chiller');
		//scale(random(0.5, 1.5));
		text('Love You Both! ^_^', width/2 -150, 300);

		pop();
	}
}

function mouseClicked()
{
	if(mouseX>50 && mouseX< 250 && mouseY>10 && mouseY< 200)
		bool=true;

	if(mouseX>250 && mouseX< 350 && mouseY >300 && mouseY<360)
		ct=true;


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

function balloon(x, y, w, h, r, g, b)
{
	fill(r, g, b);
	ellipse(x, y, w, h);

	fill(0);
	triangle(x-5, y+(h/2)+5, x, y+(h/2), x+5, y+(h/2)+5);
	line(x, y+(h/2), x+random(-5,5), y+(h/2)+random(10,20));

}

