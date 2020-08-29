// declare of a variable to represent a particle system
var c1, c2, c3, c4, c5, c6, res;
var umbrella_x, umbrella_y;
var wx1 = 50;
var wx2 = 0;
var dwx1 = 5;
var dwx2 = -5;
var sx, sy;
var s;
var ts;
var time;
var fireW1; 
var timer;
var smokeW2, smokeW3, smokeW4;
var carDx = 1
var carX, carDy, carY
var BuildingC = [];
var BuidingX = [];
var buildingW = [];
var Beginning = true
var SceneChange = false
var loc, dir;
var neckR, wingR, time3, legR, legR2, quack;
var legDown = true;
var neckDown = true;
var wingDown = false;
var animate = false;
var leg2Down = false;
var quackDown = true;
var quacky = [];
var buildingx = []
var buildingheight = []
var buildingwidth = []
var buildingcolor = []
var sentence = "Hi I'm Dorian, the duck. Lets talk about some things that are on my mind. Have you ever been here before?"
var numChar
var SpeechTimer 
var SpeechTimer3
var textOn = false
var final = false
function setup() 
	{
			createCanvas(800, 500);
		c1= color(50, 50, 160);
		c2= color(255, 225, 253);
		res=200;
		c3= color(240, 240, 80);
		c4= color(255, 170, 43);
		c5= color(18, 255, 255);
		c6= color(29, 80, 255);
		umbrella_x=150;
		umbrella_y=250;
		s= createVector(700, 70);
		time=0;

	   // start a new particle system
	   fireW1 = new PSys(370, 190, 20);
	   timer = 0
	   smokeW2 = new PSys(410, 190, 0)
	   smokeW3 = new PSys(535, 50, 0)
	   smokeW4 = new PSys(615, 50, 0)
	      carX= 300
	      carY = height
	      carDy = sin(timer/100)
	      //duck setup
	    loc = createVector(width*.9, height*.5);
   dir = createVector(-1, 0);
   neckR = 0;
   wingR = -PI/10;
   legR = PI/4
   legR2 = -PI/4
   quack = 0
   //text set
   numChar =0
	SpeechTimer = 0
	SpeechTimer3 = 0
	background(50, 198, 255)

	   fill(100, 255, 64);
	   rect(0, height/2, width, height/2);
	   push();
translate(0, height/2)
			grass();
			pop();
	}


function draw() 
{
	if(Beginning)
		{
			art();
			drawFlower( 100, 100, 1)
		//background(50, 198, 255)
			   // background(12, 245, 216);
	   //foreground
	   // drawBuildings();
	   push();
			rect(100, 200, 300, 100)
			textSize(50)
			stroke(255);
			fill(255);
			text('Begin', 180, 220, 300, 100)
		pop();
	   //push();
	   //rotate(PI); 
	   //  pop();

	 // for(i = 0; i < quacky.length; i++)
	 //   {
	 //   fill(255);
	 //   textSize(10);
	 //   text('QUACK', quacky[i] - 200 , -40)
	 //   }
	 fill(255);
	 noStroke();
	 ellipse(width/2 + 150, 150, 300, 100)
	   textBox("Hi I'm Dorian, the duck. Lets talk about some things that are on my mind. Have you ever been here before?                            ", width/2 + 50, height/2 - 120, 200, 0)
		SpeechTimer++
	   drawDuck();
	}	
	if(Beginning == false)
		{
		if(SceneChange == false)
		{
				background(255);
		gradient(c3, c4, res, 2); // sand
		gradient(c5, c6, res, 3); // water
		gradient(c1, c2, res, 1); // sky
		sand();

		drawBlueWave(wx1,0);
		drawBlueWave(400 + wx1,0);

		wx1 += dwx1
		
		if (wx1> 20){
			dwx1 = -5;	
		}
		if (wx1 < -20){
			dwx1 = 5;
		}
		
		drawWhiteWave(wx2,0);
		drawWhiteWave(400+ wx2,0);

		wx2 += dwx2
		if(wx2 < -20){
			dwx2 = 5;
		}
		if(wx2 > 20){
			dwx2 = -5;
		}


		building(-5, 160);
		building(160, 165);
		building(200, 60);
		building(260, 85);
		building(380, 165);
		//building(490, 70);


		bubbles(0, 130);
		bubbles(0, 220);
		bubbles(0, 310);

		umbrella(umbrella_x, umbrella_y);
		
		ship(s.x, 120);

		s.x-=5;

		if(s.x<-100)
		{
			s.x=800;
		}

		tree(400, 140, 1.7);
		tree(870, 340, 0.9);

		trashcan(370, 200);

		trash(200, 300);
		time++;
				push();
				stroke(0);
				strokeWeight(1);
			pop();
		SpeechTimer++
		push();
		translate(-300, 150);
		drawDuck();

		pop();
			textBox('This beach is so nice, but sometimes this gross dark fog comes around and makes it look all gloomy. Sometimes it makes my friends get sick too!', 50, height/2 - 35 + 130, 350, 0)
		}
		if(SceneChange == true && final == false)
		{
		   UrbanBackground(0);
		 push();
			
   		push();
   		scale(4);
   		translate(0, -45)
   		building(-5, 160);
		building(160, 165);
		building(200, 60);
		building(260, 85);
		building(380, 165);
		// building(390, 85);
		// building(390, 165);
		pop();
			   	fireW1.run(); 
   				smokeW2.run();
   				smokeW3.run();
   				smokeW4.run();
			 	   drawCar(carX, carY, carDx, carDy, 1, color(255, 0, 0))
			drawBuildings(-75, -200, 2)
			drawBuildings(125	, -200, 2)
			drawBuilding(200, 190, 300, 200, color(50), .5);
			drawBuilding(50, 140, 400, 200, color(50), .5);
			    drawFactory(350, 200, .25, timer)
			    drawFactory(500, 59, .5, timer)
			   timer++
			carDx = -1
			 carX += carDx 
			 carDy = -10/(2*sqrt(timer))
			 carY += carDy
			 pop();
			 push();
			 scale(.5);
			 translate(400, 400)
			 drawDuck();
			 pop();
			 // rect(300, 400, 400, 100)
			 textBox('I tracked the weird clouds to their source. They all call it air pollution here; it happens when fossil fuels and other harmful chemicals are burned and released into the air. It makes me sad how dirty this place is. Everyone doesnt seem to know how their actions affect all the rest of us. Click on the smoke to learn how to prevent pollution!', 300, 400, 400, 255)
			 SpeechTimer++
	}
			 	if(final)
					 	{
					 			background(50, 198, 255)
	   fill(100, 255, 64);
	   rect(0, height/2, width, height/2);
					 			   fill(0);
			   push();
					rect(100, 200, 300, 100)
					textSize(50)
					stroke(255);
					fill(255);
					text('End', 180, 220, 300, 100)
				pop();
			   //push();
			   //rotate(PI); 
			   //  pop();

			 // for(i = 0; i < quacky.length; i++)
			 //   {
			 //   fill(255);
			 //   textSize(10);
			 //   text('QUACK', quacky[i] - 200 , -40)
			 //   }
			 fill(255);
			 noStroke();
			 ellipse(width/2 + 150, 150, 500, 100)
			   textBox("Thanks for going on a journey with me to see the effects of pollution. I hope that it gets better for my friends at the beach, but that means that the city has to stop burning so many fossil fuels and hurting the air quality. See you next time!                                    ", width/2 - 40, height/2 - 120, 350, 0)
				SpeechTimer++
			   drawDuck();	
			   moveDuck();
			 	}
		}
}
// typing code
function textBox(txt, x, y, boxW, TextColor)
	{

		var characters = txt.split("")
	if(SpeechTimer == 5 && numChar < characters.length - 1)
		{
			SpeechTimer = 0
			numChar++
		}
	for(i = 0; i < numChar; i++)
		{
		fill(0);
		textSize(12);
		var y2 = 0
		var x2 = 7*i
		if(x2 >= boxW)
			{
				y2++
				x2 = x2 - boxW
				if(x2 >= boxW)
			{
				y2++
				x2 = x2 - boxW
				if(x2 >= boxW)
			{
				y2++
				x2 = x2 - boxW
				if(x2 >= boxW)
			{
				y2++
				x2 = x2 - boxW
					if(x2 >= boxW)
			{
				y2++
				x2 = x2 - boxW
					if(x2 >= boxW)
			{
				y2++
				x2 = x2 - boxW
				if(x2 >= boxW)
			{
				y2++
				x2 = x2 - boxW
				if(x2 >= boxW)
			{
				y2++
				x2 = x2 - boxW
				if(x2 >= boxW)
			{
				y2++
				x2 = x2 - boxW
			}
			}
			}
			}
			}
			}
			}	
			}

			}
		push();
		translate(x + x2, y + 10*y2)
	fill(TextColor);
		text(characters[i], 0, 0)
		// document.write("hi")

		pop();
		}
	}
		
function mouseClicked()
{
	if(mouseX < 200 && mouseY < 300 && Beginning == false)
	{
		SceneChange = true
		SpeechTimer = 0
		numChar = 0
	}
	if(mouseX >= 100 && mouseX <= 400 && mouseY && Beginning)
	{
		Beginning = false
			SpeechTimer = 0
		numChar = 0
	}
	if(mouseX < width - 100&& mouseX > 300 && mouseY < 300 && Beginning == false && SceneChange)
	{
		final = true
		SpeechTimer = 0
		numChar = 0
	}

}
function mousePressed()
{
   loc = createVector(width*.9, height*.5);
   animate = !animate;
}
// DUCK CODE
// begin end background
function art()
{
   fill(255, 200, 0);
   ellipse(0, 0, 170);
   
   fill(255, 120, 0);
   ellipse(0, 0, 130);

   fill(255, 150, 0);
   ellipse(0, 0, 100);

   fill(255, 180, 0);
   ellipse(0, 0, 80);

   fill(255, 200, 0);
   ellipse(0, 0, 60);

   fill(50, 50, 180);
   ellipse(0, height, width, 300);

   fill(50, 50, 200);
   ellipse(0, height, width-50, 250);

   fill(100, 0, 0);
   ellipse(40, 260, 30, 20);

   fill(100, 0, 0);
   ellipse(60, 273, 30, 23);

   fill(100, 0, 0);
   ellipse(85, 270, 20, 23);

   stroke(100, 250, 100);
   strokeWeight(4);
   line(20, 265, 25, 240);
   line(20, 263, 5, 230);

   fill(50, 100, 510);
   line(101, 280, 120, 250); 
   line(100, 276, 95, 241);

   noStroke();
   fill(100, 50, 70);
   ellipse(195, 353, 30, 20);

   fill(100, 50, 30);
   ellipse(175, 335, 25, 30);

   fill(100, 50, 70);
   ellipse(190, 377, 15, 15);

   fill(100, 50, 70);
   ellipse(170, 387, 20, 20);

   fill(100, 100, 70);
   ellipse(210, 388, 15, 15);

   fill(100, 0, 0, 200);
   rect(5, 130, 25, 75);
   rect(50, 130, 25, 75);
   rect(100, 130, 25, 75);
   rect(150, 130, 25, 75);
   rect(200, 130, 25, 75);

   rect(0, 150, 256, 20);




}
function grass()
{
    for(var i=0; i< 3700; i++)
    { 
        stroke(random(100), random(150, 255), random(90));
        line(random(0, width/2),
             random(0, height/2),
             random(width/2, width), 
             random(0, height/2)
            ); 
    }
}
function drawFlower(fx, fy, sc)
{
    push();
      translate(fx, fy);
      scale(sc);   
         fill(200, 50, 100);
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
         fill(250, 180, 0);
         ellipse(0, 0,20); 
   pop();
}
function drawDuck() 
{

   push();
   noStroke();
      //move the entire duck
      translate(loc.x, loc.y);
      scale(2); //scale the entire duck

      // draw body
      fill(11, 145, 32);
      ellipse(0, 0, 40, 30); 

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(0);
         rect(-8, -25, 14, 3)
         rect( -5, -30, 8, 5)
         ellipse(0, -19, 4, 4);  //eye
         fill(155, 111, 16);
	         push();
	         	translate(-4, -18);
		         push();
		         	rotate(quack);
		         	triangle(-6, 0, 0, -3, 0, 0)
	         	 pop();
	         rotate(-quack);
	         triangle(-6, 0, 0, 3, 0, 0)
	            
	        // triangle(-10, -18, -4, -21, -4, -15); //beak
	        pop();
      pop();

         if (quack < 0)
         {
            quacky.push(loc.x);

         }

      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();

      //TODO - this is where you will add the code to animation the legs - follow
      //the examples for the wings and neck 
      push();
         translate(0, 10);
         rotate(legR)
         fill(171, 110, 76);
         rect(-2.5, 0, 5, 20);
         fill(0);
         rect(-2.5, 10, 5, 10);
          rect(-5, 15, 5, 5);
         ellipse(-5, 17.5, 5)
   pop();
   push();
     translate(0, 10);
            rotate(legR2);
            fill(171, 110, 76);
            rect(-2.5, 0, 5, 20);
            fill(0);
            rect(-2.5, 10, 5, 10);
            rect(-5, 15, 5, 5);
            ellipse(-5, 17.5, 5)

      pop();
      pop();
}

// function to update all animation parameters - very 
// simple scripted animation
function moveDuck() 
{
   // update the ducks global location
   loc.add(dir);

   // find out how much the neck is rotated to decide which way to rotate
   // these constrain how much the neck moves up and down\
   if (quack < 0) 
   {
      quackDown = false;
   } 

   if (quack > PI/6) 
   {
      quackDown = true;
   }

   // depending on which way we need to rotate, do so
   if (quackDown == true) 
   {
      quack -= PI/150;
   } 
   else 
   {
      quack += PI/150;
   }

   if (legR < -PI/3) 
   {
      legDown = false;
   } 
   if (legR > PI/3) 
   {
      legDown = true;
   }

   // depending on which way we need to rotate, do so
   if (legDown == true) 
   {
      legR -= PI/150;
   } 
   else 
   {
      legR += PI/150;
   }

   if (legR2 < -PI/3) 
   {
      leg2Down = false;
   } 
   if (legR2 > PI/3) 
   {
      leg2Down = true;
   }

   // depending on which way we need to rotate, do so
   if (leg2Down == true) 
   {
      legR2 -= PI/150;
   } 
   else 
   {
      legR2 += PI/150;
   }


   if (neckR < -PI/3) 
   {
      neckDown = false;
   } 
   if (neckR > PI/10) 
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown == true) 
   {
      neckR -= PI/100;
   } 
   else 
   {
      neckR += PI/100;
   }

   // find out how much the wing is rotated to decide which way to rotate
   // these constrain how much the wing moves up and down
   if (wingR < -2*PI/5) 
   {
      wingDown = true;
   } 
   if (wingR > -PI/20) 
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown == false) 
   {
      wingR -= PI/100;
   } 
   else 
   {
      wingR += PI/100;
   }
}
function drawFactory(x, y, sc, timer)
{
	push();
		translate(x, y);
		scale(sc);
		for(i = 0; i < 10; i++)
		{
			fill(200);
			stroke(0);
			rect(50, 30*i, 50, 30);
			fill(100);
			rect(40, 0, 70, 10);
			noStroke();
		}
		for(i = 0; i < 10; i++)
			{
				fill(200);
				stroke(0);
				rect(200, 30*i, 50, 30);
				fill(100);
				rect(190, 0, 70, 10);
				noStroke();
			}
		fill(241, 235, 171);
		rect(-100, 250, 400, 300);
		for(i = 0; i < 3; i++)
		{
		triangle(-100 + 400/3*i, 250, -100 + 400/3*(i+1), 250, -100 + 400/3*(i+1), 200)
			push();
			fill( 85, 68, 71)
			translate(400/6 - 100 + i*400/3, 220)
			rotate(-PI/8 + .04)
			rect(-400/6 - 10, -5, 400/3 + 15, 10);
			pop();
		}
		for(i = 0; i < 7; i++)
		{
			fill( 85, 68, 71)
			stroke(0);
			rect(50*i -65, 360, 30, 30)
			fill(200 +50*sin(timer/100)*sin(timer/100), 200 + 50*sin(timer/100)*sin(timer/100), 0);
			noStroke();
			ellipse(50*i -50, 375, 25*sin(timer/100));
		}
	pop();

}
function Particle(x , y) // you will need to modify the parameters
{
   // the data associated with a particle
   this.accelY = 0.05; //gravity
   this.velX = random(-.5, .5);
   this.velY = random(.5, 1.3);

   // note this particle only can vary its blue color 
   // - change this to include red and green
   this.pcolor = random(0, 100);
   this.locX = x;
   this.locY = y;
   this.r = 16.0;
   this.life = 100;
  
   // a function to update the particle each frame
   this.updateP = function()
   {
   	if(this.velX < 5 && this.velX > -5)
   	{
   	  this.velX += random(-.2, .2);
   	}
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY -= this.velY;
      this.life -= 1.0;
   };
  
   // function to draw a particle
   this.renderP = function() 
   {
   	if(this.locY > 0)
   	{
      noStroke();
      push();
         fill(this.pcolor);
         translate(this.locX, this.locY);
         ellipse(0, 0, this.r, this.r);
      pop();
  	}
   };
} 
//end of particle object definition


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
         // if(this.locY > 400)
         // {
         // 	this.particles.splice([i])
         // }
      }
      this.particles.push(new Particle(sX, sY))
   }
}

function UrbanBackground(color)
{
	for(i = 0; i < height; i++)
		{
		stroke(255-i/2)
		line(0, i, width, i)
		}
}

function drawCar(x, y, dx, dy, sc, c)
{
   push();
      translate(x, y);
      rotate(atan2(dy, dx) + PI);
      scale(sc);

      fill(c);
            rect(0, 0, 40, 20); //car body
            rect(10, -10, 20, 10); //car top
            fill(250, 250, 250, 250);
            rect(12, -8, 16, 6); //window
            noStroke();
            fill(190);
            ellipse(10, 20, 8, 12);
            ellipse(30, 20, 8, 12);
   pop();
}

function drawBuilding(x, y, height, width, color, sc)
{
	push();

	translate(x, y);
	scale(sc)
	fill(color);

	rect(0, 0, width, height)
	// a	= random(1, 2, 3, 4, 5)
	// b   = random(1, 2, 3, 4, 5)
	for(var j = 0; j < height/50; j++)
	{
		push();
		translate(0, 50*j);
		for(var i = 0; i < width/50; i++)
		{
			fill(255);
			// if(i == a && j == b)
			{
				fill(200, 200, 0);
			}
			rect(15 + 50*i, 10, 20, 30);
		}
		pop();
	}
	pop();
}
function drawBuildings(x, y, sc)
{
	push();
	translate(x, y);
	scale(sc);
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
		pop();
}



//********************************************************





///////////////////////Functions/////////////////////////

function gradient(x, y, res, n)
{
   if(n==1)
    {	for(var i=0; i< res; i++)
    	{
        	var w=width, h=(height/4)/res;
        	noStroke();
        	fill(lerpColor(x, y, i/res));
        	rect(0, i*h, w, h);
    	}
    }

    else if(n==2)
    {
    	for(var i=0; i< res; i++)
    	{
        	var w=width, h=height/res;
        
        	noStroke();
        	fill(lerpColor(x, y, i/res));
        	rect(0, i*h, w, h);

    	}

    }

    else if(n==3)
    {
    	for(var i=0; i< res; i++)
    	{
        	var w=width, h=(2*height/3)/res;
        
        	noStroke();
        	fill(lerpColor(x, y, i/res));
        	rect(0, i*h, w, h);

    	}
    }

}

function drawBlueWave(wx1,y)
{	// Waves Blue
	strokeWeight(1);
		stroke(0, 0, 255);
		
	push();
		translate(wx1,y);
		
		

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


function umbrella(x, y)
{
	push();
	translate(x-50, y-30);
	scale(0.78);
	rotate(-PI/10)
		stroke(0);

		//stick
		fill(230 ,210, 198);
		rect(-5,0,10,250,5);
		
		//Umbrella Cover
		fill(230, 30, 114);
		beginShape();
		vertex(0,10);
		bezierVertex(-50,40,-150,20,-190,120);
		bezierVertex(-170,110,-170,110,-160,120);
		bezierVertex(-140,110,-140,110,-130,120);
	    bezierVertex(-110,110,-110,110,-100,120);
	    bezierVertex(-80,110,-80,110,-70,120);
	    bezierVertex(-50,110,-50,110,-40,120);
	    bezierVertex(-20,110,-20,110,-10,120);
	    bezierVertex(10,110,10,110,20,120);
	    bezierVertex(40,110,40,110,50,120);
	    bezierVertex(70,110,70,110,80,120);
	    bezierVertex(100,110,100,110,110,120);
	    bezierVertex(130,110,130,110,140,120);
	    bezierVertex(160,110,160,110,170,120);
	    bezierVertex(180,110,180,110,190,120);
	    bezierVertex(150,20,50,40,0,10);
	 	endShape();

	 	//Spots
	 	fill(255, 255, 0);
	 	ellipse(0, 0, 30);

	 	fill(255, 255, 0);
	 	ellipse(-40, 40, 20);
	 	ellipse(-80, 50, 15);
	 	ellipse(-120, 60, 10);
	 	ellipse(-150, 80, 10);

	 	ellipse(40, 40, 20);
	 	ellipse(80, 50, 15);
	 	ellipse(120, 60, 10);
	 	ellipse(150, 80, 10);

	 	//Matress
	 	fill(255, 255, 0);
	 	rect(-160, 255, 230, 110);

	 	//Pillow
	 	fill(0, 0, 100);
	 	rect(30, 280, 30, 50);

	 	//Straw
	 	fill(200, 200, 200);
	 	push();
	 		rotate(-PI/10)
	 		rect(-120, 155, 5, 30);
	 	pop();

	 	//Coconut
	 	fill(130, 87, 45);
	 	arc(-50, 210, 50, 60, 0, PI);

	 pop();
}


function ship(x, y)
{
	push();
	scale(1.1)
	stroke(10, 10, 10);
		translate(x,y);
		fill(30, 30, 100);
		rect(-50, -30, 100, 30);
		fill(70, 70, 75);
		quad(-100, 0, 75, 0, 50, 50, -50, 50);
		fill(150);
		rect(-40, -50, 80, 20);

		fill(240, 200, 0);
		rect(-20, -75, 10, 25);
		ellipse(-40, 15, 10);
		ellipse(-40, 15, 10);
		ellipse(-20, 15, 10);
		ellipse(0, 15, 10);
		ellipse(20, 15, 10);
		ellipse(40, 15, 10);

		fill(0, 150);
		ellipse(-20, random(-90, -95), 15);
		ellipse(-25, random(-90,-105), 15);
		ellipse(-10, random(-90,-110), 20);
		ellipse(-20, random(-100,-110), 15);
		ellipse(-6, random(-80, -100), 15);

		ellipse(-40, 55, 190, 10);

		textSize(20);
		fill(240);
		text("StarCruise", -45, -2);

	pop();
}

function bubbles(x, y)
{
	for(var i=0; i< 200; i++)
	{
		noStroke();
		fill(random(230, 255), random(230, 255), random(230, 255));
		ellipse(x+ 5*i, y+random(18), 10);
	}

}

function sand()
{
	for(var j=340; j<850; j+=6)
	{
		for(var i=0; i<width; i+=7)
		{
			fill(245, 165, 29);
			ellipse(2*i + random(-1,1), j, 13);
		}
	}
}

function tree(x, y, ts)
{
	push();
	scale(ts);
	translate(x, y);
	fill(150, 0, 0);
	rotate(-PI/15);
	beginShape();
		curveVertex(0, 0);
		curveVertex(-20, -10);
		curveVertex(-20, -50);
		curveVertex(-20, -60);
		curveVertex(-25, -70)
		curveVertex(-30, -80);
		curveVertex(-40, -90);
		curveVertex(-30, -90);
		curveVertex(-20, -90);
		curveVertex(0, -90);
		curveVertex(10, -60);
		curveVertex(10, -20);
		curveVertex(20, 30);
		curveVertex(20, 60);
		curveVertex(20, 180);
		curveVertex(-20, 150);
		curveVertex(5, 50);
	endShape();

	fill(0, 150, 0);
	push();
		rotate(-PI/10);
		ellipse(0, -80, 170, 30);

	pop();

	rotate(PI/10);
	ellipse(-10, -75, 230, 30);

	ellipse(-40, -80, 30, 180);

	fill(80, 10, 10);
	ellipse(-20, -70, 30);
	ellipse(-50, -80, 30);
	ellipse(-46, -50, 20);
	ellipse(5, 140, 30);

	pop();

}

function trashcan(x, y)
{
	push();
	scale(1.5);
	translate(x, y);
	fill(0)
		quad(0, 0, 60, 0, 50, 60, 10, 60);
		fill(80);
		ellipse(30, -5, 65, 20);

		
		fill(255);
		textSize(15);
		text("Trash", 10, 40);
		
		fill(10);
		rect(-20, 90, 10, 50);
		rect(20, 90, 10, 50);
		fill(160, 255, 120);
		rect(-40, 70, 95, 40);
		fill(0, 0, 255);
		text("Help keep", -30, 85);
		text("Our city clean", -37, 105);
		textSize(1);

	pop();
}


function building(x, y)
{
	push();
	scale(0.3);
	translate(x, y);
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
	pop();
}

function Cloud(cx,cy,s)
{
  this.cloudX = cx;
  this.cloudY = cy;
  this.scale = s;
  
  this.display = function(){
    push()
    translate(this.cloudX,this.cloudY);
    scale(this.scale);
    fill(255,100);
    noStroke();
    beginShape();
      vertex(100,30);
      bezierVertex(-100,30,-100,30,-100,30);
      bezierVertex(-120,20,-110,-10,-90,-5);
      bezierVertex(-100,-15,-80,-35,-70,-20);
      bezierVertex(-80,-60,0,-70,-5,-5);
      bezierVertex(0,-15,15,-15,15,5);
      bezierVertex(20,-5,45,-4,47,10);
      bezierVertex(50,-4,70,0,69,15);
      bezierVertex(85,10,110,10,100,30);
    endShape();
  pop();
  }

 }
function trash(x, y)
{
	push();
	translate(x, y);
	pop();
		//quad(0, 0, )

}
