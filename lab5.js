var x0=10, y0=10;
var x1=390, y1=390;
var curx, cury;
var diam=0.5;
var n=30, t=0.5;


function setup()
{
	createCanvas(400, 400);
	frameRate(2);
	//noLoop();
}

function draw()
{
	background(255);

for(var z=0; z<2; z++)
 for(var k=0; k<3; k++)
  for(var j=0; j<5; j++)
	for(var i=0; i<5; i++)
	{
		fill(random(50,255), random(255), random(20,255));

		if(t%2 ==0)
		{
			curx= width/2 + t*cos(t);
			cury= height/2 + t*sin(t);
		}

		else
		{
			curx= width/2 + t*cos(t);
			cury= height/2 + t*sin(t);
		}

		t+=0.1;

		ellipse(curx, cury, diam);

		if(t>180)
			noLoop();

	}	

	
}