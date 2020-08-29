function setup()
{
	createCanvas(700, 700);
}

function draw()
{
  //Background: different shades of squares and circles
	background(0, 0, 0);
	noStroke();
	fill(181, 60, 115);
	//fill(255,159,26);
	//fill(234,247,95); //Yellow
    rect(10,10,680,680);
    fill(255,168,0); //Orange
    rect(30,30,640,640);
    fill(10, 190, 50); // Light Green
    rect(60, 500, 580, 150);   
    fill(81, 176, 204); //Blue
    rect(60, 50, 580,250);
    fill(45,146,247); //Bright Blue
    rect(60, 200, 580,300);
    fill(99, 171,19); //Green
    rect(60, 350, 580,180);

  //Feet:
    fill(255,242,122); //Pale Yellow-2
	rect(370, 480, 30, 30); 
	fill(60,215,255); //Light Blue
	ellipse(385, 500, 20, 20); 

    fill(60,215,255);
    rect(300, 480, 30, 30);   
	fill(255,242,122);
	ellipse(315, 500, 20, 20);

  //Tail:
    fill(255, 204, 0);
    ellipse(500, 400, 55, 40);
    fill(255,245,25); //Bright yellow
    ellipse(525, 370, 45, 30);
    fill(255,246,102); //Pale yellow
    ellipse(545, 349, 35, 20);
    fill(168,255,27);
    ellipse(565,340,18,18);
   
   //Stomach:
	fill(255,13,114); //Dark Pink
	arc(350, 365, 275, 250, 0,0, OPEN);
    fill(255,117,13); //Darker orange
	ellipse(350, 380, 150, 150);
	//ellipse(350, 395, 100, 100);
	fill(255,242,122); //Pale yellow-2
	ellipse(350, 400, 100, 100);
	fill(255,102,68); //Orange-2
	ellipse(350, 410, 20, 20);


   push();
	//Face:Tilt the face (3*PI/6) towards the left
	rotate(-PI/15);
	translate(-85, 61);

  	//push();
  	fill(255,231,87); //dark yellow
	arc(350, 190, 200, 200, 3*PI/4, PI/4, OPEN);
	//fill(180, 150, 90);	
 
	fill(247,106,154);
	ellipse(300, 200, 15, 15);
	ellipse(400, 200, 15, 15);

   //Whiskers: left
    stroke(0);
    strokeWeight(3);
    fill(99,99,125); //Black
    line(320, 200, 260, 190);
    line(320, 200, 265, 175);
    line(320, 200, 260, 205);

   //Whiskers: right  
    fill(0, 0, 0); //Black
    line(380, 200, 440, 190);
    line(380, 200, 435, 175);
    line(380, 200, 440, 205); 

   //Mouth:
    noStroke();
    fill(255,99,75); //Orange
	arc(350, 225, 55, 70, 0, PI);
	arc(330, 225, 40, 20, 0, PI);
	arc(370, 225, 40, 20, 0, PI); 
	fill(247,106,154);
	//ellipse(300, 200, 15, 15);
	//ellipse(400, 200, 15, 15);

   //Teeth:
    fill(255,255,255); //white
    triangle(330, 230, 330, 240, 335, 230)
    triangle(360, 230, 360, 240, 365, 230);
    fill(92,54,26);
    ellipse(350,200,30,30); 

   //Ear:Outer
    fill(255, 204, 0);
    triangle(270, 130, 280, 50, 320, 95);
    triangle(370, 95, 400, 50, 430, 130);

  //Ear:Inner  
    fill(255,126,146); //Pale pink
    triangle(268, 133, 280, 90, 320, 95);
    triangle(370, 95, 400, 85, 430, 130); 

    fill(255, 255, 255)
    ellipse(290,110,15,10);
    ellipse(407,110,15,10);

  //Eyes: Outer
    fill(181,152,74);
    arc(310, 180, 50, 55, PI, 0);
    arc(390, 180, 50, 55, PI, 0);

  //Eyes: Inner
    fill(0, 0, 0);
	ellipse(310, 168, 18, 23);
	ellipse(390, 168, 18, 23);  
    fill(255, 255, 255);
	ellipse(393,167,7,12);
	ellipse(313, 168, 7,12);
   pop();  

   
  //Hands:
    fill(255,242,122); // Pale Yellow-2
    triangle(235, 300, 170, 220, 150, 230);
    triangle(465, 300, 550, 220, 570, 230);

  // Flowers:
    stroke(0);
  	fill(0, 0, 0);
  	line(150, 530, 160, 630);
  	line(170, 560, 160, 630);
  	line(240, 550, 260, 630);
  	line(270, 585, 260, 630);
  	
  	noStroke();
  	fill(247, 92, 153);
  	arc(150, 530, 30, 30, 7*PI/4, 5*PI/4);
  	arc(170, 560, 30, 30, 7*PI/4, 5*PI/4);
  	fill(255, 61, 41);
  	arc(240, 550, 30, 35, 7*PI/4, 5*PI/4);
  	ellipse(270, 585, 10, 20);
  		
   //Mouse:
    stroke(0);
    strokeWeight(2);
    fill(90,90,90);
   	arc(450, 600, 60, 50, PI, 0);
   	ellipse(420, 590, 30, 20);
   	ellipse(407, 593, 7, 7);
   	fill(255,255,255);
   	ellipse(415, 587, 7, 7);
   	fill(0, 0, 0);
   	ellipse(415, 588, 3, 3);
   	line(478, 590, 530, 585);
}
