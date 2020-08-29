var cloudpiece =[];
var cx = [];
var cy = [];
var dx_cloud = [];
var dy_cloud = [];

var wing_rot = [];
var beak_rot = [];
var neck_rot = [];
var neck_dwn = [];
var wing_dwn = [];
var beak_dwn = [];
var duck_pos = [];

function setup()
{
   createCanvas(400,400);

   red = 255;
   yellow = false;
   green = 0;
   turquoise = false;
   blue = 0;
   purple = false;
   gradiant = 500;

   rot_hand = -PI/3;
   d_hand = PI/80;

   g_x = 100;
   g_y = 200;
   g_sc = 2;

   b_x = 10;
   b_y = 50;

   a_x = 200;
   a_y = 130;
   a_sc = 2;

   num_clouds = 15;
      for(var i=0; i<num_clouds*5;i++){
      var col = random(200,255);
      cloudpiece.push(color(col,col,col));
   }
   for(var i=0; i<num_clouds*5;i+=5){
      cx.push(random(-10,345));
      cy.push(random(-10,345));
      dx_cloud.push(random(.1,.5));
      dy_cloud.push(random(-.1,.1));
   }

   magic = new PSys(200,250, random(20,30));

   newDuck();

   time=0;
}

function draw()
{  
   stroke(0);
   background(rainbow());
   if(time<3*60){
      bus(b_x,b_y);
      theGirl(g_x,g_y,g_sc);

      rot_hand += d_hand
      if(rot_hand <= -PI || rot_hand >= 0)
         d_hand = -d_hand;

      g_x += 1/2;
      g_y += -7/12
      g_sc -= 1/120;
   }

   if(time>=3*60 && time<4*60){
      bus(b_x,b_y);

      theGirl(g_x,g_y,g_sc);

      fill(255,255,0);
      noStroke();
      rect(135,110,30,30);

      g_x -= 3/4
   }

   if(time >= 7.5*60 && time<17.5*60){
      airport(0,150);
      airplane(a_x,a_y,a_sc);
   }

   if(time>=4*60 && time<9*60){
      bus(b_x,b_y);
      theGirl(g_x, g_y, g_sc);

      fill(255,255,0);
      noStroke();
      rect(b_x+125,b_y+61,30,30);

      b_x += 2;
      g_x += 2;
   }

   if(time==7.5*60){
      b_x = -170;
      b_y = 250;
      g_x = -35;
      g_y = 300;
   }
   if(time>=9*60 && time<10*60){
      bus(b_x,b_y);

      theGirl(g_x,g_y,g_sc);

      fill(255,255,0);
      noStroke();
      rect(b_x+125,b_y+61,30,30);

      g_x += 3/4;
   }
   if(time>=10*60 && time<11*60){
      bus(b_x,b_y);
      theGirl(g_x,g_y,g_sc);

      g_x -= 1/2;
      g_y -= -7/12
      g_sc += 1/120;
   }
   if(time>=11*60 && time<14.5*60){
      bus(b_x, b_y);
      b_x += 2;

      theGirl(g_x,g_y,g_sc);
   }
   if(time>=12*60 && time<14*60){
      theGirl(g_x,g_y,g_sc);

      g_x += 1/2;
      g_y -= 1;
   }
   if(time>=14*60 && time<15.2*60){
      theGirl(g_x,g_y,g_sc);

      g_x += 7/12;
      g_y -= 3/4;
      g_sc -=1/100;
   }
   if(time>15.2*60 && time<21*60){
      airport(0,150);
      airplane(a_x, a_y, a_sc);
      theGirl(g_x,g_y,g_sc);
      fill(200);
      noStroke();
      rect(g_x-6, g_y+9, 12,15);

      a_x += 1;
      g_x += 1;
   }
   if(time==21*60){
      var ratio = g_sc/a_sc;
      a_sc = 1
      while(g_sc/a_sc > ratio){
         g_sc -= 1/300;
         g_x -= 17/24;
         g_y -= 8/24;
      }
   }
   if(time >= 21*60 && time < 23*60){
      airport(0,150);
      airplane(a_x, a_y, a_sc);
      theGirl(g_x,g_y,g_sc);
      noStroke();
      fill(200);
      rect(g_x-3, g_y+4, 6, 5);

      a_x -= time/100;
      g_x -= time/100;
   }
   if(time == 23*60){
      a_x = 500;
      g_x = 530;
   }
   if(time>=23*60 && time<33*60){
      var cloud = 0
      for(var i=0; i<num_clouds;i++){
         drawCloud(cx[i],cy[i],cloud);
         cloud += 5;
         cx[i] += dx_cloud[i];
         cy[i] += dy_cloud[i];
         if(cx[i]>width+15){
            cx[i] = -60;
            dx_cloud[i] = random(.1,.5);
            if(cy[i]<-15 || cy[i] > height+40){
               cy[i] = random(15,150);
               dy_cloud[i] = random(-.1,.1);
            }
         }
      } 

      airplane (a_x, a_y, a_sc);
      theGirl(g_x,g_y,g_sc);

      a_x -= 4/5;
      g_x -= 3/5;
      g_y += 1/20;
   }
   if(time>=33*60 && time <= 38*60){
      var cloud = 0
      for(var i=0; i<num_clouds;i++){
         drawCloud(cx[i],cy[i],cloud);
         cloud += 5;
         cx[i] += dx_cloud[i];
         cy[i] += dy_cloud[i];
         if(cx[i]>width+15){
            cx[i] = -60;
            dx_cloud[i] = random(.1,.5);
            if(cy[i]<-15 || cy[i] > height+40){
               cy[i] = random(15,150);
               dy_cloud[i] = random(-.1,.1);
            }
         }
      } 

      airplane (a_x, a_y, a_sc);
      theGirl(g_x,g_y,g_sc);
      parachute(g_x, g_y);

      a_x -= 4/5;
      g_x += 3/5;
      g_y += 1;
   }
   if(time == 38*60){
      g_y = -10;
   }
   if(time>=38*60 && time < 40*60){
      pond();
      theGirl(g_x,g_y, g_sc);
      drawDuck(0);

      g_y += 2;
      g_sc += 1/100;
   }
   if(time>=40*60 && time < 42*60){
      pond();
      theGirl(g_x,g_y, g_sc);

      g_x -= 2/3;
      g_y += 1;
      g_sc -= 1/100;

      drawDuck(0);
      duck_pos[0].add(duck_mv);
      //update neck
      if(neck_dwn[0])
         neck_rot[0] -= PI/160;
      if(!neck_dwn[0])
         neck_rot[0] += PI/160;
      if(neck_rot[0] >= PI/4 || neck_rot[0] <= -PI/4)
         neck_dwn[0] = !neck_dwn[0];
  
         //update beak
      if(beak_dwn[0])
         beak_rot[0] -= PI/160;
      if(!beak_dwn[0])
         beak_rot[0]+=PI/160;
      if(beak_rot[0] >= 0 || beak_rot[0] <= -PI/16)
         beak_dwn[0] = !beak_dwn[0];
      
      drawDuck(1);

      d_sc += 1/200;

      magic.run();
   }
   if(time>=42*60 && time<50*60){
      pond();
      for(var i=0; i<2; i++){
         drawDuck(i);
         duck_pos[i].add(duck_mv);

         //update neck
         if(neck_dwn[i])
         neck_rot[i] -= PI/160;
         if(!neck_dwn[i])
         neck_rot[i] += PI/160;
         if(neck_rot[i] >= PI/4 || neck_rot[i] <= -PI/4)
         neck_dwn[i] = !neck_dwn[i];
  
         //update beak
         if(beak_dwn[i])
            beak_rot[i] -= PI/160;
         if(!beak_dwn[i])
            beak_rot[i]+=PI/160;
         if(beak_rot[i] >= 0 || beak_rot[i] <= -PI/16)
            beak_dwn[i] = !beak_dwn[i];
      }    
   }
   if(time>=50*60)
      setup();

   time+=1;
}

function theGirl(x,y,sc){
   push();
      translate(x,y);
      scale(sc);
      //body
      if(time>=50*60)
         fill(0,0,255);
      else
         fill(time/30, time/30, time/20);
      triangle(0,0, -20,80, 20,80);

      push();
         translate(0,30);
         rotate(rot_hand);
         rect(0,0, 5,30);
      pop();

      //face
      fill(0);
      ellipse(0,-5,20);
   pop(); 
}

function parachute(x,y){
   push();
      translate(x,y);
      stroke(0);
      line(0,0, 10,-20);
      line(0,0, -10,-20);
      fill(255);
      arc(0,-10, 40,40, PI,2*PI);
   pop();
}

function bus(x,y){
   push();
      translate(x,y);
      fill(255,255,0);
      rect(0,0,200,100);
      rect(200,40, 50,60);
      fill(0,255,255);
      for(var i=5; i<150; i+= 40){
         rect(i,30, 30,30);
      }
      rect(160,20,30,65);
      fill(0);
      ellipse(50,90, 50);
      ellipse(200,90,50);

      stroke(0);
      text('To SKUL', 75,80);
      ellipse(111,70,1);
      ellipse(113,70,1);

   pop();
}

function airport(x,y){
   push();
      translate(x,y);
      fill(100);
      rect(0,0, width, 100);
      for(var i=10; i<width; i+=20){
         fill(255,255,0);
         rect(i,50, 15,5);
      }
      fill(180);
      rect(300,-100, 50,120);
      quad(300,-80, 280,-120, 370,-120, 350,-80);
      fill(0,255,255);
      quad(310,-90, 290,-110, 360,-110, 340,-90);
   pop();
}

function airplane(x,y,sc){
   push();
      translate(x,y);
      scale(sc);
      fill(200);
      stroke(0);
      quad(20,5, 60,5, 140,-20, 120,-20);
      quad(160,5, 140,5, 165,-10,180,-10);
      noStroke();
      rect(0,0, 150,40);
      arc(0,20, 40,40, PI, 3*PI/2);
      ellipse(0,25, 80,30);
      push();
         translate(65,40);
         fill(0);
         rect(5,0,5,10);
         ellipse(2.5,10,10);
         ellipse(12.5,10, 10);
         rect(-85,0, 5,10);
         ellipse(-82.5,10, 10);
      pop();
      ellipse(140,20,70,40);
      stroke(0);
      text('College Airways', -20,35);
      quad(20,25, 60,25, 160,60, 140,60);
      quad(160,25, 140,25, 165,40, 180,40);
      quad(140,10, 165,10, 165,-20, 150,-20);
      for(var i=0; i<140; i+=10){
         fill(0,255,255);
         ellipse(i,15, 5,10);
      }
      scale(.45);
      thehat(345,0);
   pop();
}

function drawCloud(x,y,i){
   push();
      translate(x,y);
      noStroke();
      fill(cloudpiece[i]);
      ellipse(0,0, 40,30);
      fill(cloudpiece[i+1]);
      ellipse(40,-5, 40,30);
      fill(cloudpiece[i+2]);
      ellipse(20, 0, 30);
      fill(cloudpiece[i+3]);
      ellipse(30,-25, 30);
      fill(cloudpiece[i+4]);
      ellipse(5,-20, 30);
   pop();
}

function pond(){
   fill(0,200,0);
   rect(0,300, width, 100);
   fill(0,200,200);
   ellipse(100, 350, 300, 100);   
}

function thehat(x,y){
   push();
      translate(x,y);
      stroke(255);
      fill(0,0,255);
      quad(-20,-15, 0,-25, 20,-15, 0,-5);
      fill(255,255,0);
      noStroke();
      rect(0,-15, 20, 3);
      rect(18,-15, 3, 20);
   pop();
}

function fw_part(x,y){
   this.accelY = .01;
   this.vel = createVector(random(-1,1),random(-1,1));
   this.col = color(random(255),random(255),random(255));
   this.loc = createVector(x,y);
   this.r = random(4,8);
   this.life = 100;
   this.updateP = function(){
      this.vel.y += this.accelY;
      this.loc.add(this.vel);
      this.life --;
   };
   this.renderP = function(){
      noStroke();
      fill(this.col,this.life);
      push();
         translate(this.loc.x, this.loc.y);
         ellipse(0,0, this.r*1.5, this.r);
      pop();
   };
}

function PSys(sx, sy, num){
   this.particle = [];
   for(var i=0; i<num; i++){
      this.particle.push(new fw_part(sx,sy));
   }
   this.run = function(){
      for(var i=this.particle.length-1; i>=0; i--){
         this.particle[i].updateP();
         this.particle[i].renderP();
         if(this.particle[i].life <= 0 ||
            this.particle[i].loc.x < 0 ||
            this.particle[i].loc.x > width ||
            this.particle[i].loc.y < 0 ||
            this.particle[i].loc.y > height){
            this.particle.splice(i,1);
            this.particle.push(new fw_part(sx,sy));
         }
      }
   }
}

function drawDuck(i){
   push();
      translate(duck_pos[i].x, duck_pos[i].y);
      if(i==1)
         scale(d_sc);
      noStroke();
      fill(240,240,20);
      ellipse(0,0,80,40);
      push();
         translate(-32,-5);
         rotate(neck_rot[i]);
         ellipse(0,-10,20,40);
         push();
            translate(-5,-25);
            rotate(-neck_rot[i]);
            ellipse(-2,-2,20,15);
            fill(0);
            ellipse(-2,-2, 5);
            push();
               translate(-7,-4);
               fill(230,160,0);
               triangle(0,-4, 0,1, -20,6);
               rotate(beak_rot[i]);
               triangle(0,0,0,7, -20,5);
            pop();
         pop();
      pop();

      push();
         translate(-10,-2);
         rotate(wing_rot[i]);
         stroke(0);
         ellipse(15,0,60,30);
      pop();
   pop(); 
}

function newDuck(){
   for(var i=0; i<2; i++){
      wing_rot.push(0);
      beak_rot.push(0);
      neck_rot.push(0);
      neck_dwn.push(false);
      wing_dwn.push(false);
      beak_dwn.push(true);
      d_sc = 1/100;
   }
   duck_pos[0] = (createVector(200, 350));
   duck_pos[1] = (createVector(250, 350));
   duck_mv = (createVector(random(-1/2,-1),0))
}

function rainbow(){
   if (red >= 254 && green <= 255 && !purple && !yellow){
      green += 255/gradiant;
      if(green >= 254)
         yellow = !yellow;
   }

   if(yellow){
      red -= 255/gradiant;
      if(red <= 1)
         yellow = !yellow;
   }

   if (red <= 1 && !turquoise){
         blue += 255/gradiant;
         green -= (255/1.5)/gradiant;
      if(blue >= 254)
         turquoise = !turquoise;
   }

   if(turquoise){
      green -= 255/gradiant;
      if(green <= 1)
         turquoise = !turquoise;
   }

   if(blue >= 254 && green <=1 && !purple){
      red += 255/gradiant;
      if(red >= 254)
        purple = !purple;
   }

   if(purple){
      blue -= 255/gradiant;
      if (blue <= 1)
         purple = !purple;
   }
   return color(red,green,blue);
}