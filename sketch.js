var diameter=400;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
   background(255,102,0);
   translate(width/2,height/2*1.2);
   
   //circles
   noFill();
   stroke(50);
   strokeWeight(0.5);
   ellipse(0,0,diameter);
   
   ellipse(0,0,diameter/1.35);
   
   ellipse(0,0,diameter/2);
   
   //hat
   push();
   translate(0,-270);
   
   fill(0);
   arc(0,0,300,200,-180,0,PIE);
   
   noStroke();
   fill(0);
   rect(-150,0,300,110);
   
   strokeWeight(40);
   stroke(0);
   noFill();
   arc(0,90,380,50,0,180);
   pop();
   
   //eye
   push();
   translate(-90,-40);
   
   for(var a=0; a<=360; a+=20) {
     stroke(0);
     strokeWeight(6);
     strokeCap(SQUARE);
     line(0,0,cos(a)*42,sin(a)*42);
   }
   
   strokeWeight(10);
   fill(255);
   ellipse(0,0,60);
   
   noStroke();
   fill(0);
   ellipse(0,0,28);
   pop();
   
   if(hour()>12) {
     var h24=hour()-12;
   }
   
   clockHand(hour(),12,diameter/2,'white',24);
   clockHand(minute(),60,diameter/(1.35*2),'white',16);
   clockHand(second(),60,diameter/4,'white',8);
}
 
 function clockHand(timeValue,range,radius,color,d) {
   var angle = map(timeValue,0,range,-90,270);
   posX=radius*cos(angle);
   posY=radius*sin(angle);
   noStroke();
   fill(color);
   ellipse(posX,posY,d);
 }

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}