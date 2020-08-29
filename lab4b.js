var xb, yb, sc, d;
var c1, c2, res;
var r, g, b, o;
var xt, yt, s, rt, bt, gt;


function setup()
{
    colorMode(RGB);
    createCanvas(400, 400);
    c1= color(255, 242, 56); //color(78, 254, 225);
    c2= color(58, 129, 255); // color(0, 32, 102);
    res=80;
    xb=0;
    yb=0;
    sc=1;
    xt=100;
    yt=100;
    frameRate(0.5);
    //noLoop();
}

function draw()
{
   background(80, 254, 255);

   gradient(c1, c2, res); //Calling the function gradient

   grass(); //Calling the function grass


    for(var i=0; i<100; i++)
    {
        //Calling the function bubble
        bubble(random(50, width),
               random(30, 6*height/8),
               random(5, 40),
               random(1.25),
               random(255),
               random(255),
               random(255),
               random(230, 240) 
               );   
    }


    for(var i=0; i< 20; i++)
    {
        star(random(50, width),
            random(30, 6*height/8),
            random(5, 40),
            random(255),
            random(255),
            random(255)
            );
    }

    stick(); //Calling the function stick
    flower(); //Calling the function flower

    /*//Mouse Hover for visible coordinates
    push();
        fill(150, 50, 90);
        textSize(20);
        textAlign(CENTER);
        text("("+ floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY-10);
    pop(); 
    */  
}


function grass()
{
    for(var i=0; i< 3700; i++)
    { 
        stroke(random(100), random(150, 255), random(90));
        line(random(-50, 450),
             random(350, 450),
             random(-50, 450), 
             random(380, 450)
            ); 
    }
}

function bubble(xb, yb, d, sc, r, g, b, o)
{   
    push();
        translate(xb, yb);
        fill(r, g, b, o);
    
        ellipse(0, 0, d);
        push();
        noStroke();
   
        fill(random(200, 250), random(200, 250), random(200, 250), o);
        arc(6, -2, d/3, d/3, 3*PI/2, PI/2);

        fill(r, g, b, o);
        ellipse(1, 0, d/2, d/2);
        pop();
    pop();

}

function stick()
{   
    noStroke();
    fill(250, 150, 0);
    quad(38, 295, 45, 298, 40, 399, 31, 410);

    ellipse(41, 330, 20, 30);
    ellipse(42, 300, 30, 40);

    fill(29, 96, 156); // blue clr btw orange ellipse
    ellipse(41, 330, 10, 15);
    ellipse(42, 300, 21, 25);
}

function mouseClicked()
{
    bubble(mouseX,
           mouseY,             
           random(5, 40),
           random(1.25),
           random(255),
           random(255),
           random(255),
           random(220, 240) 
          );
}


function gradient(c1, c2, res)
{
    for(var i=0; i< res; i++)
    {
        var w=400, h=height/res;
        
        noStroke();
        fill(lerpColor(c1, c2, i/res));
        rect(0, i*h, w, h);

    }
}

function flower()
{
    for(var i=0; i< 150; i++)
    {
        fill(random(180, 255), 50, 0 );
        ellipse( random(0, 400), random(370, 400), random(10) );

    }

}

function star(xt, yt, s, rt, gt, bt)
{
    push();

        translate(xt, yt);
        noStroke();
        fill(rt, gt, bt);
        triangle(0, -10, -10, 10, 10, 10);
        triangle(-10, -6, 10, -6, 0, 15);

    pop();
}