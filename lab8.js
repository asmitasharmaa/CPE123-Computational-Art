// To start the animation click anywhere in the window
var loc, dir;
var neckR, wingR, time;
var leftleg, rightleg;
var flower;
var neckDown = true;
var wingDown = false;
var leftlegDown = true;
var rightlegDown = false;
var animate = false;
var s=1;
var beakR;
var beakClose=false;

// normal set up
function setup() 
{
   createCanvas(400, 400);

   loc = createVector(width*.9, height*.5);
   dir = createVector(-1, 0);
   neckR = 0;
   wingR = -PI/10;
   leftleg = 0;
   rightleg =0;
   beakR = PI/32;
}

// normal draw
function draw() 
{
   background(12, 215, 216);

   //foreground
   fill(78, 190, 16);
   rect(0, height/2, width, height/2);

    for(var i=height/2 -100; i<height; i+=50)
   {
      for(var j=width/2; j<width; j+=50)
      {
         drawFlower(i + 130, j + 40, random(0.5, 0.55));
      }
   }

   art();

   drawDuck(2);

   if (animate) 
   {
      moveDuck();
   }
  
}

// method to control starting the duck over again and 
// control animation on and off
function mousePressed() 
{
   loc = createVector(width*.9, height*.5);
   animate = !animate;
}

// code to draw the duck with animation parameters 
// neckR and wingR - other transforms align the pieces 
// to the correct pivot points Be very careful modifying 
// this code - the structure of the push and pops are 
// what builds the hierarchical relationships
function drawDuck(s) 
{
   noStroke();

   push();
      //move the entire duck
      translate(loc.x, loc.y);
      scale(s); //scale the entire duck

      // draw body
      fill(245, 226, 12);
      ellipse(0, 0, 40, 30); 

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(0);
         ellipse(0, -19, 4, 4);  //eye

         push();
            translate(-4,-18)
            fill(155, 111, 16);
            rotate(beakR);
            triangle(-9, 0, -2.5, -3, -2.5, 0); //beak
            rotate(-2*beakR);
            triangle(-9, 0, -3, 0, -3, 3);
         pop();
         //fill(155, 111, 16);
         //triangle(-10, -18, -4, -21, -4, -15); //beak
      pop();

      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();

      //TODO - this is where you will add the code to animation the legs - follow the examples for the wings and neck 
      //Left Leg
      push();
         stroke(255, 150, 0);
         strokeWeight(1);
         rotate(leftleg);
         translate(-5, 13.5);
         rect(0, 0, 2, 15);
         ellipse(-1, 15, 6, 2);
      pop();

      //Right Leg
      push();
         stroke(255, 150, 0);
         strokeWeight(1);
         rotate(rightleg);
         translate(2, 13.5);
         rect(0, 0, 2, 15);
         ellipse(0, 15, 6, 2);
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
   // these constrain how much the neck moves up and down
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

   if (leftleg < -PI/10)
   {
      leftlegDown = true;
   }

   if (leftleg > PI/10)
   {
      leftlegDown = false;
   }

   if (leftlegDown == false)
   {
      leftleg -= PI/200;
   }

   else
   {
      leftleg += PI/200;
   }

   if (rightleg < -PI/10)
   {
      rightlegDown = true;
   }

   if (rightleg > PI/10)
   {
      rightlegDown = false;
   }

   if (rightlegDown == false)
   {
      rightleg -= PI/200;
   }

   else
   {
      rightleg += PI/200;
   }

   if (beakClose==true)
   {
      beakR-=PI/200
   }
   if (beakClose==false)
   {
      beakR+=PI/200
   }
   if (beakR < 0)
   {
      beakClose=false
   }
   if (beakR > PI/32)
   {
      beakClose=true
   }
}

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








