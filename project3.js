var max_theta;
var rad;
var dist;
var bcirx=[];
var bciry=[];
var scirx=[];
var sciry=[];
var bcol=[];
var scol=[];
var num;
var x, y;
var size;
var radbx, radby;
var radsx, radsy;
var cx, cy, c;
var radx, rady;
var linex, liney;
var l,m,n,o;
var count;
var dx=5, dy=5, dx1=2, dy1=3;
var rot;
var angle, circle;
var stopHere=0;
var radius;
var radius, theta, cx, cy, xs, ys;

function setup()
{
	
	frameRate(3);
	createCanvas(500,500);
	decreasing = true;
	rot=PI/3;
	num_lines=48;
	x=10;
	y=20;
	radbx=30;
	radby=50;
	radsx=10;
	radsy=30;
	size=0.01;
	max_theta= 5*PI;
	count=100;
	num=20;
	var angle=2*PI/3;

	linex=0;
	liney=30;
	
	for(var i=0; i<num; i++)
	{
		for(var j=0; j<num ; j++)
		{
			bcirx.push(x);
			bciry.push(y);
			scirx.push(x);
			sciry.push(y);

			x+=40;

			bcol.push(color(random(230,255),
						    random(80,150), 
						    random(30), 100
						    )
					);

			scol.push(color(random(50,100),
						    random(50,100), 
						    random(50,100), 150
						   )
					);
		}

		y+=60;
		x=10;
	}

	/*for(var i=0; i<1500; i+=30)
		{
			stroke(200);
			line_(0, liney+dy1, 500, liney+dy1);
			line_(linex+dx1, 0, linex+dx1, 500);
		}

		dx1+=15;
		dy1+=15;

		if(dx1>6000 || dy1>6000)
		{
			dx1=50;
			dy1=30;
		}
*/
}

function draw()
{
	//noLoop();
	//noStroke();
	stroke(255);
	background(30, 30, 80);

	fill(255, 200, 0);
	quad(50, 50, 450, 50, 450, 450, 50, 450);
	fill(255, 255, 0);
	quad(250, 0, 500, 250, 250, 500, 0, 250);

	for(var i=0; i<bcirx.length; i++)
	{
		circle(bcirx[i], bciry[i], bcol[i], radbx, radby);
		circle(scirx[i], sciry[i], scol[i], radsx, radsy);
	}

	var x1=23, y1=30;

	for(var i=0; i<height; i+=20)
	{
		for(var j=0; j<width; j+=50)
		{
			drawFlower(x1+j+dx, y1+size+dy, size);
		}

		y1+=50;
		x1=25;
		//size+=0.005;
		dx+=2;
		dy+=2;

	}

	for(var i=0; i<10; i++)
		spiral(550,550);

}


function spiral(a,b)
{

   radius = 0;
   scale(0.7);
  
   for (theta = 0; theta < max_theta; theta += 3*PI/50)
   {
      xs = a + radius * cos(theta);
      ys = b + radius * sin(theta);

      //fill(66 , 81 , 184);
      //fill(255,0,0);
      //ellipse(xs, ys, 3);  
     drawFlower(xs, ys, 0.4);

     radius+=2;
	  
   }

   if(max_theta>2*PI && decreasing)
	 {	max_theta-=3*PI/50;
	 	//radius -= 3;
	 }

	 if(max_theta <= 2*PI && decreasing)
	 {
	 	decreasing = !decreasing;
	 }

	 if(max_theta<=5*PI && !decreasing)
	 {	max_theta+=3*PI/50;
	 	//radius += 3;
     }  

     if(max_theta> 5*PI && !decreasing){
     	decreasing = !decreasing;
     }


}


function line_(l, m, n, o)
{
	fill(255);
	line(x, m, n, o);
}


function circle(cx, cy, c, radx, rady)
{
	push();
	fill(c);
	scale(1);
	ellipse(cx, cy, radx, rady);
	pop();

}

function drawFlower(fx, fy, sc)
{
    push();
		translate(fx, fy);
		scale(sc);
		//Rotating the flower while its moving
		rotate(rot+=PI/3);
		//noStroke();		
			fill(255, 0,0);
			ellipse(3,15,20, 20); 
			ellipse(0,-15,20, 20); 
			ellipse(15,-2,20, 20);		
			push();
				rotate(PI/3);
				ellipse(0, 15,20, 20); 
			pop();
			push();
				rotate(-PI/3);
				ellipse(0, -15,20, 20); 
			pop();
			fill(150, 0, 200);
			ellipse(0, 0,20); 
	pop();
}


function mouseClicked()
{
	
	noLoop();
}
////////////////

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

