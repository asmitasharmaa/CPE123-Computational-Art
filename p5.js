var max_theta, num_lines, angle, ru;
var count=0;
var x0=10, y0=10;
var x1=490, y1=490;
var curx, cury;
var diam=1;
var n=30, t=0.5;

function setup()
{
   createCanvas(500, 500);
   frameRate(8);

   ru = false;
   max_theta = 0;
   num_lines = 36;
   angle = PI/2;
}

function draw()
{
   var x, y, theta, red, blue;

   background(0);
   // Circular ring
   ring();

   //Animated Celtic Knot
   celtic();
}

// Heart-Butterfly Like Celtic Knot
function celtic()
{
   red = 255;
   blue = 0;
   for (theta = 0; theta < max_theta; theta += PI/num_lines)
   {
      x1 = 250 + 150 * cos(0.5*theta);
      y1 = 250 + 150 * sin(theta);
      x2 = 250 + 150 * cos(0.5*theta+angle);
      y2 = 250 + 150 * sin(theta+angle);

      stroke(red, random(200), blue);
      line(x1, y1, x2, y2);  

      // adjusting the color for red and blue
      if (ru)
         red += 255/num_lines; 

      else
      {
         red -= 255/num_lines;
         blue += 255/num_lines; 
      } 

      //change ru if we get a min or max value
      if (red > 255 || red < 0)
      {
         ru = !ru;
      }

      count++;

      if(count>6600)
         noLoop();
   }

   max_theta += 2*PI/num_lines;
}

// Circular Flickering Ring
function ring()
{
 for(var z=0; z<2; z++)
  for(var k=0; k<3; k++)
   for(var j=0; j<5; j++)
    for(var i=0; i<5; i++)
    {
      fill(random(50,255), random(255), random(20,255));

      if(t%2 ==0) //If even
      {
         curx= width/2 + t*cos(t);
         cury= height/2 + t*sin(t);
      }

      else        //If odd 
      {
         curx= width/2 + t*cos(t);
         cury= height/2 + t*sin(t);
      }

      t+=1.5;

      ellipse(curx, cury, diam);

      if(t>width/2)
         t=1;
    }  
}