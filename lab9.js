// Example of very simple particle systems - introduction to objects in javascript

// define a single particle
function Particle(x , y) // you will need to modify the parameters
{
   // the data associated with a particle
   this.accelY = random(0.7); //gravity
   this.velX = random(-5, 5);
   this.velY = random(-3, 1.3);
   
   // note this particle only can vary its blue color 
   // - change this to include red and green
   this.pcolorR = random(150, 255);
   this.pcolorG = random(200);
   this.pcolorB = random(50, 255);
   this.locX = x;
   this.locY = y;
   this.r = 10;
   this.life = 500;
  
   // a function to update the particle each frame
   this.updateP = function()
   {
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 8;

      if(this.velY<-80)
      {
         this.velY+= 0.05;
      }

      else
      {
         this.velY += this.accelY;
      }
   };
  
   // function to draw a particle
   this.renderP = function() 
   {
      noStroke();
      push();
         fill(this.pcolorR, this.pcolorG, this.pcolorB, this.life/2);
         translate(this.locX, this.locY);
         ellipse(0, 0, this.r, this.r);
      pop();
   };
} //end of particle object definition

// define a group of particles as a particleSys
function PSys(sX, sY, num)
{
   // the data - lots of particles
   this.particles = [];
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY));
   }
  
   // function defining what to do each frame
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}

// declare of a variable to represent a particle system
var candy_sys;
var c;
var mouse = false; 

function setup() 
{
   createCanvas(500, 500);

   // start a new particle system
   candy_sys= new PSys(250, 230, 100);
   frameRate(30);
   
}

function draw() 
{
   background(20);

   candy(250, 250);

   // run the particle system
   
  candy_sys.run();
  if (mouse)
     c.run();

  
   
}

function candy(cx, cy)
{
   push();
      translate(cx, cy);
      fill(50, 50, 170);
      rect(-70, 60, 140, 150);
      fill(255, 255, 0);
      textSize(20);
      text("Candy Land",-50, 100);

      fill(250, 240, 230);
      ellipse(0, 0, 150);

      stroke(200, 250, 50);

      for(var i=0; i< 12; i++) // yellow
      {
         fill(255, 200,0);
         ellipse(-58 + 10*i, 40, 8);
      }

      for(var i=0; i< 13; i++) // green
      {
         fill(50, 200, 0);
         ellipse(-58 + 10*i, 32, 8);
      }

      for(var i=0; i< 14; i++) // blue
      {
         fill(50, 50, 200);
         ellipse(-65 + 10*i, 15, 8);
      }

      for(var i=0; i< 14; i++) // red
      {
         fill(250, 50, 50);
         ellipse(-65 + 10*i, 23, 8);
      }

      for(var i=0; i< 11; i++) // pink
      {
         fill(255, 50, 150);
         ellipse(-50 + 10*i, 48, 8);
      }

      for(var i=0; i< 9; i++) // purple
      {
         fill(200, 50, 200);
         ellipse(-40 + 10*i, 58, 8);
      }

       for(var i=0; i< 6; i++) // red
      {
         fill(250, 50, 50);
         ellipse(-25 + 10*i, 67, 8);
      }

      // Floor candy

       for(var i=0; i< 20; i++) // green
      {
         fill(50, 200, 0);
         ellipse(-248 + 60*i, 230, 8);
      }

      for(var i=0; i< 24; i++) // blue
      {
         fill(50, 50, 200);
         ellipse(-145 + 60*i, 240, 8);
      }

      for(var i=0; i< 44; i++) // red
      {
         fill(250, 50, 50);
         ellipse(-200 + 30*i, 228, 8);
      }

      for(var i=0; i< 31; i++) // pink
      {
         fill(255, 50, 150);
         ellipse(-250 + 40*i, 242, 8);
      }

   pop();
}

function mouseClicked()
{
   c= new PSys(mouseX, mouseY, 100);
   mouse = true;
}