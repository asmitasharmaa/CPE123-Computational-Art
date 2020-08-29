var x0, y0;
var x1, y1;
var x=50, y=400;
var imp1, imp2;
var rad=130;
var cx, cy;
var sizex=50, sizey= 50;
var dist=0;

function setup()
{
	createCanvas(500, 500);
}

function draw()
{	
	background(255);
	noLoop();
	noStroke();

	sky();

	for(var i=0; i<height+20; i++)
	{	for(var j=0; j<width+20; j++)
		{
			imp1 = implicit_line(250, 50, i, 60, 250, 470);
			imp2 = implicit_line(255, 50, i, 40, 255, 476);

			if(imp2>0 && imp1<0)
			{
				fill(random(50));
				ellipse(i, j, random(4,6));
			}
		}
	}

	for(var i=0; i<height+20; i++)
	{	for(var j=0; j<width+20; j++)
		{
			imp1 = implicit_line(100, 50, i, 60 , 100, 470);
			imp2 = implicit_line(105, 50, i, 40, 105, 476);

			if(imp2>0 && imp1<0)
			{
				fill(random(50));
				ellipse(i, j, random(4,6));
			}
		}
	}

	for(var i=0; i<height+20; i++)
	{	for(var j=0; j<width+20; j++)
		{
			imp1 = implicit_line(400, 300, i, 40 , 400, 470);
			imp2 = implicit_line(405, 300, i, 60, 405, 476);

			if(imp2>0 && imp1<0)
			{
				fill(random(50));
				ellipse(i, j, random(4,6));
			}
		}
	}

	//Green
	for(var i=0; i<height; i+=5)
	{
		for(var j=0; j<width; j+=10)
		{
			circle = implicit_circle(i, 300, j, 70, rad-20);

			if(circle<0)
			{
				fill(random(40), random(60,100), random(40));
				ellipse(i+random(-2,2), j+random(-2,25), 10);
			}	
		}
	}

	//Purple
	for(var i=0; i<height; i+=5)
	{
		for(var j=0; j<width; j+=5)
		{
			circle = implicit_circle(i, 250, j, 200, rad-20);

			if(circle<0)
			{
				fill(random(100,255), random(30), random(200,255));
				ellipse(i+random(-2,2), j+random(-10,70), 10);
			}	
		}
	}

	//Red
	for(var i=0; i<height; i+=5)
	{
		for(var j=0; j<width; j+=5)
		{
			circle = implicit_circle(i, 100, j, 100, rad);
			
			if(circle<0)
			{
				fill(random(255), 0, 0);
				ellipse(i+random(-2,2), j+random(-20,80), 10);
			}	
		}
	}

	// Yellow
	for(var i=0; i<height; i+=5)
	{
		for(var j=0; j<width; j+=5)
		{
			circle = implicit_circle(i, 440, j, 100, rad);
			dist= distance(400, i, 100, j)/10;
			
			if(circle<0)
			{
				fill(random(240,255)-dist, random(200,240)-dist, 0);
				ellipse(i+random(-2,2), j+random(-20,60), 10);
			}	
		}
	}

	for(var i=0; i<height; i+=5)
	{
		for(var j=0; j<width; j+=5)
		{
			circle = implicit_circle(i, 10, j, 490, rad-70);
			//dist= distance(400, i, 100, j)/10;
			
			if(circle<0)
			{
				fill(random(255), random(255), random(255), 180);
				ellipse(i+random(-50,490), j+random(-10,60), 100, 5);
			}	
		}
	}



}


///// Functions /////

function sky()
{

	for(var i=0; i<height+20; i+=5)
	{	for(var j=0; j<width+20; j+=5)
		{
			if(j<3*height/4)	
			{	
				fill(random(100,150), random(200,230), random(230,255));
				ellipse(i, j, random(10,40));
			}

			else
			{
				fill(random(100,200), random(200,255), random(100));
				ellipse(i, j, random(60, 80));
			}	
		}
	}
	
}

function implicit_line(x0, y0, x, y, x1, y1)
{
	return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

function implicit_circle(x, cx, y, cy, rad)
{
	return (x-cx)*(x-cx) + (y-cy)*(y-cy) - rad*rad;
}

function distance(x0, y0, x1, y1)
{
	return sqrt(pow(x0-x1,2) + pow(y0-y1,2));
}