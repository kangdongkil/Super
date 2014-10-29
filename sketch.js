var trailX0=0;
var trailX1=0;
var trailX=[0,0,0,0,0,0,0,0,0,0];

var trailY0=0;
var trailY1=0;
var trailY=[0,0,0,0,0,0,0,0,0,0];
var count=0;
var scount = 0;
var dir1=1;
var dir2=1000;
var dir3=2000;
var dir4=3000;
var f = 0;
var soundFile;



function setup() {
   createCanvas(1500, 1650);
   background(0);
   noStroke();
   noFill();
   
}





function mouseClicked(){
    
    if(f===0){
        f=1;
    }else if(f===1){
        f=0;
    }

}



function draw() {
     

    background(255);
     drawBack(0, 0, 125);
    if(f === 0 ){
        drawSasm();
    }else if(f===1){
        drawTree();
        
    }
var x=50;
    //drawSa();
    translate(10,20);
    drawSnow();
    drawMouse();
}


function drawBack(){


    noStroke();


    var x;
    x= 50;
    var r=Math.random();
    fillColor = color(
     Math.random() *255,
     Math.random() *255, 
     Math.random() *255, 
     alpha);

    mouseColor = color(
     mouseX / 640 * 200 + Math. random() * 200,
     mouseY / 480 * 255, 0);

    var size = Math.abs(mouseX - 340);
    if (mouseX < 100) {
       ellipse(50, 200, 100, 100);
   } else if (mouseX < 200){
       ellipse(150, 200, 100, 100);
   } else if (mouseX < 300){
       ellipse(250, 200, 100, 100);
   } else if (mouseX < 400){
       ellipse(350, 200, 100, 100);
   } else if (mouseX < 500){
       ellipse(450, 200, 100, 100);
   } else {
       ellipse(550, 200, 100, 100);
   }
   for(var i=0; i<10; i=i+1){
     fill(206, 41, 49);
     rect(0,count+i*6*x,30*x,3*x);
     fill(17,67,41);
     rect(0,count+3*x+i*6*x,30*x,3*x);
 }

 count=count-3;
 if(count<-6*x){
     count=0;
 }




     //snow
     fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
     var y;
     y=300;
     
     rect(20,180,1*x,1*x);
     rect(120,80,15,15);
     //rect(180,200,13,13);
     rect(270,100,15,15);
     rect(400,10,18,18);
     rect(500,200,12,12);
     rect(650,80,1*x,1*x);
     rect(800,350,14,14);
     rect(950,140,12,12);
     rect(1000,20,15,15);
     rect(1100,190,18,18);
     rect(1300,250,16,16);
     rect(1450,50,15,15);
     
     rect(20,180+y,13,13);
     //rect(120,80+y,15,15);
     //rect(180,200+y,13,13);
     //rect(270,100+y,15,15);
     //rect(400,10+y,1*x,1*x);
     //rect(500,200+y,12,12);
     rect(650,80+y,15,15);
     rect(800,350+y,14,14);
     rect(950,140+y,12,12);
     rect(1000,20+y,15,15);
     rect(1100,190+y,18,18);
     rect(1300,250+y,1*x,1*x);
     rect(1450,50+y,15,15);

     y=600;
     rect(20,180+y,13,13);
     rect(120,80+y,15,15);
     rect(180,200+y,13,13);
     //rect(270,100+y,15,15);
     rect(400,10+y,18,18);
     //rect(500,200+y,12,12);
     rect(650,80+y,15,15);
     //rect(800,350+y,14,14);
     rect(950,140+y,12,12);
     //rect(1000,20+y,15,15);
     //rect(1100,190+y,18,18);
     rect(1300,250+y,16,16);
     rect(1450,50+y,15,15);

     y=900;
     rect(20,180+y,18,18);
     rect(120,80+y,15,15);
     rect(180,200+y,1*x,1*x);
     rect(270,100+y,15,15);
     rect(400,10+y,18,18);
     rect(500,200+y,12,12);
     //rect(650,80+y,13,13);
     //rect(800,350+y,14,14);
     rect(950,140+y,12,12);
     rect(1000,20+y,15,15);
     rect(1100,190+y,18,18);
     rect(1300,250+y,16,16);
     rect(1450,50+y,15,15);

     y=1200;
     rect(20,180+y,15,15);
     rect(120,80+y,15,15);
     rect(180,200+y,13,13);
     rect(270,100+y,15,15);
     rect(400,10+y,18,18);
     rect(500,200+y,12,12);
     //rect(650,80+y,13,13);
     //rect(800,350+y,14,14);
     //rect(950,140+y,12,12);
     //rect(1000,20+y,15,15);
     rect(1100,190+y,18,18);
     rect(1300,250+y,1*x,1*x);
     rect(1450,50+y,15,15);

     y=1500;
     rect(20,180+y,12,12);
     rect(120,80+y,15,15);
     rect(180,200+y,13,13);
     rect(270,100+y,15,15);
     rect(400,10+y,18,18);
     rect(500,200+y,12,12);
     rect(650,80+y,13,13);
     //rect(800,350+y,14,14);
     rect(950,140+y,12,12);
     rect(1000,20+y,15,15);
     rect(1100,190+y,18,18);
     rect(1300,250+y,16,16);
     rect(1450,50+y,15,15);

     



 }
 function drawSasm(){
    
    blendMode(REPLACE);
    var x;
    x= 50;
    var r=Math.random();
    fillColor = color(
     Math.random() *255,
     Math.random() *255, 
     Math.random() *255, 
     alpha);
    //reft bbul
    fill(117,91,58);
    triangle(4*x,1*x,3*x,3*x,4*x,3*x);
    fill(88,76,65);
    rect(3*x,3*x,1*x,3*x);
    fill(118,80,48);
    triangle(7*x,3*x,5*x,6*x,6*x,6*x);
    fill(82,63,46);
    triangle(3*x,6*x,2*x,7*x,3*x,7*x);
    fill(88,76,65);
    triangle(3*x,6*x,4*x,6*x,3*x,7*x);
    fill(69,59,46);
    triangle(5*x,6*x,5*x,8*x,6*x,8*x);
    fill(82,63,46);
    triangle(5*x,6*x,6*x,6*x,6*x,8*x);
    fill(82,63,46);
    rect(2*x,7*x,1*x,1*x);
    fill(117,91,58);
    triangle(3*x,7*x,3*x,8*x,4*x,8*x);
    fill(69,53,41);
    rect (2*x,8*x,2*x,2*x);
    fill(102,79,51);
    triangle(4*x,8*x,4*x,10*x,5*x,10*x);
    fill(95,62,39);
    triangle(5*x,8*x,6*x,8*x,6*x,10*x);
    fill(112,83,61);
    triangle(6*x,8*x,6*x,10*x,7*x,10*x);
    fill(97,68,37);
    triangle(3*x,10*x,4*x,10*x,4*x,11*x);
    fill(104,80,55);    
    rect(4*x,10*x,3*x,1*x);
    fill(82,63,46);
    triangle(7*x,10*x,7*x,11*x,8*x,11*x);
    fill(62,55,41);
    triangle(7*x,11*x,8*x,11*x,8*x,12*x);
    fill(82,63,46);
    rect(8*x,11*x,1*x,1*x);
    fill(117,87,68);
    triangle(9*x,12*x,10*x,8*x,11*x,12*x);
    fill(75,60,51);
    triangle(8*x,12*x,11*x,12*x,11*x,15*x);
    fill(95,70,52);
    triangle(11*x,13*x,11*x,15*x,12*x,15*x);

     //right bbul
     fill(82,63,46);
     triangle(25*x,2*x,25*x,4*x,26*x,4*x);
     fill(82,63,46);
     triangle(22*x,4*x,23*x,7*x,24*x,7*x);
     fill(69,53,41);
     rect(25*x,4*x,1*x,3*x);
     fill(69,53,41);
     triangle(23*x,7*x,24*x,7*x,23*x,9*x);
     fill(82,63,46);
     triangle(24*x,7*x,23*x,9*x,24*x,9*x);
     fill(125,109,95);
     triangle(25*x,7*x,26*x,7*x,26*x,8*x);
     fill(125,109,95);
     triangle(26*x,7*x,26*x,8*x,27*x,8*x);
     fill(82,63,46);
     triangle(26*x,8*x,25*x,9*x,26*x,9*x);
     fill(88,76,65);
     rect(26*x,8*x,1*x,1*x);
     fill(82,63,46);
     triangle(23*x,9*x,22*x,11*x,23*x,11*x);
     fill(69,53,41);
     triangle(23*x,9*x,24*x,9*x,23*x,11*x);
     fill(82,63,46);
     triangle(25*x,9*x,24*x,11*x,25*x,11*x);
     fill(69,59,46);
     rect(25*x,9*x,2*x,2*x);
     fill(125,109,95);
     triangle(22*x,11*x,21*x,12*x,22*x,12*x);
     fill(82,63,46);
     rect(22*x,11*x,3*x,1*x);
     fill(69,59,46);
     triangle(25*x,11*x,26*x,11*x,25*x,12*x);
     fill(130,116,99);
     rect(20*x,12*x,1*x,1*x);
     fill(69,53,41);
     triangle(21*x,12*x,22*x,12*x,21*x,13*x);
     fill(69,59,46);
     triangle(18*x,13*x,16*x,15*x,18*x,15*x);
     fill(88,76,65);
     triangle(18*x,13*x,21*x,13*x,18*x,16*x);

     //reft ear
     fill(157,146,127);
     triangle(5*x+mouseX*r*0.01,14*x,6*x,13*x+mouseY*r*0.1,7*x,14*x);
     fill(157,146,127);
     triangle(5*x+mouseX*r*0.01,14*x,7*x,14*x,7*x,15*x);
     fill(130,116,99);
     triangle(7*x,14*x,7*x,16*x,9*x,15*x);
     fill(129,123,111);
     triangle(5*x+mouseX*r*0.01,14*x,7*x,15*x,7*x,16*x);
     fill(129,123,111);
     triangle(5*x+mouseX*r*0.01,14*x,6*x,17*x,7*x,16*x);
     fill(157,146,127);
     triangle(7*x,16*x,9*x,15*x,12*x,16*x);
     fill(157,146,127);
     triangle(7*x,16*x,6*x,17*x,8*x,18*x);
     fill(129,123,111);
     triangle(7*x,16*x,10*x,16*x,8*x,18*x);
     fill(157,146,127);
     triangle(10*x,16*x,8*x,18*x,11*x,17*x);
     fill(88,76,65);
     triangle(10*x,16*x,11*x,16*x,11*x,17*x);
     fill(82,63,46);
     rect(11*x, 16*x, 1*x, 1*x);
     fill(157,146,127);
     triangle(11*x,17*x,8*x,18*x,11*x,18*x);
     fill(125,109,95);
     rect(11*x,17*x,2*x, 1*x);
     fill(88,76,65);
     triangle(10*x,18*x,12*x,18*x,11*x,19*x);

      //right ear
      fill(122,113,97);
      triangle(18*x,16*x,22*x,14*x+mouseY*r*0.1,24*x,14*x);
      fill(130,118,97);
      triangle(18*x,16*x,21*x,16*x,24*x,14*x);
      fill(139,125,112);
      triangle(21*x,16*x,24*x,14*x,24*x,16*x);
      fill(81,77,57);
      triangle(24*x,14*x,25*x,14*x,24*x,15*x);
      fill(134,111,88);
      triangle(18*x,16*x,19*x,16*x,19*x,18*x);
      fill(136,123,108);
      triangle(19*x,16*x,19*x,18*x,22*x,18*x);
      fill(125,109,95);
      triangle(19*x,16*x,21*x,16*x,22*x,18*x);
      fill(129,118,99);
      triangle(21*x,16*x,24*x,16*x,22*x,18*x);
      fill(111,91,73);
      triangle(18*x,16*x,18*x,18*x,19*x,18*x);
      fill(151,137,113);
      triangle(18*x,18*x,19*x,18*x,18*x,19*x);

      //face
      fill(100,76,54);
      triangle(11*x,15*x,14*x,15*x,12*x,16*x);
      fill(88,66,45);
      triangle(12*x,16*x,14*x,15*x,14*x,16*x);
      fill(75,57,45);
      rect(14*x, 15*x, 2*x, 2*x);
      fill(96,70,49);
      triangle(16*x,15*x,17*x,15*x,16*x,17*x);
      fill(105,80,53);
      triangle(17*x,15*x,18*x,16*x,16*x,17*x);
      fill(75,60,51);
      triangle(17*x,15*x,18*x,15*x,18*x,16*x);
      fill(103,76,51);
      triangle(12*x,16*x,14*x,16*x,14*x,17*x);
      fill(103,76,51);
      triangle(12*x,16*x,12*x,17*x,14*x,17*x);
      fill(119,102,88);
      triangle(16*x,17*x,18*x,17*x,18*x,16*x);
      fill(135,122,108);
      triangle(13*x,17*x,13*x,18*x,14*x,18*x);
      fill(79,70,54);
      triangle(13*x,17*x,15*x,17*x,14*x,18*x);
      fill(57,46,35);
      triangle(14*x,18*x,15*x,17*x,15*x,18*x);
      fill(62,55,53);
      rect(15*x,17*x,1*x,1*x);
      fill(119,102,88);
      triangle(16*x,17*x,17*x,17*x,17*x,19*x);
      fill(111,91,73);
      rect(17*x,17*x,1*x,1*x);
      //eye
      fill(35,32,25);
      triangle(17*x,19*x,18*x,19*x,18*x,18*x);
     //triangle(17*x,18*x,17*x,19*x,18*x,17*x);
     fill(53,44,37);
     triangle(17*x,18*x,17*x,19*x,18*x,18*x);
     fill(88,76,65);
     triangle(16*x,17*x,16*x,20*x,18*x,21*x);
     fill(106,90,73);
     triangle(17*x,19*x,18*x,19*x,18*x,21*x);
     fill(82,67,56);
     triangle(11*x,19*x,12*x,18*x,12*x,20*x);
     //eye
     fill(39,33,31);
     triangle(12*x,18*x,13*x,18*x,13*x,19*x);
     fill(22,24,19);
     triangle(12*x,18*x,12*x,19*x,13*x,19*x);
     fill(112,101,84);
     triangle(12*x,19*x,12*x,20*x,14*x,19*x);
     fill(62,51,40);
     triangle(13*x,22*x,14*x,22*x,14*x,21*x);
     fill(67,57,42);
     triangle(13*x,18*x,14*x,18*x,14*x,19*x);
     fill(88,76,65);
     triangle(13*x,18*x,13*x,19*x,14*x,19*x);
     fill(57,46,35);
     triangle(14*x,18*x,16*x,18*x,14*x,19*x);
     fill(62,55,53);
     triangle(14*x,19*x,16*x,18*x,15*x,20*x);
     fill(90,74,60);
     triangle(16*x,18*x,15*x,20*x,16*x,21*x);
     fill(60,50,36);
     triangle(12*x,20*x,14*x,19*x,13*x,22*x);
     fill(69,61,49);
     triangle(12*x,20*x,14*x,19*x,13*x,22*x);
     fill(69,61,49);
     triangle(14*x,19*x,13*x,22*x,14*x,21*x);
     fill(72,59,51);
     triangle(14*x,19*x,14*x,22*x,15*x,20*x);
     fill(108,97,80);
     triangle(15*x,20*x,14*x,22*x,16*x,21*x);
     fill(114,100,83);
     triangle(16*x,20*x,16*x,21*x,18*x,21*x);
     
     //face under
     fill(69, 59, 46);
     triangle(12*x,20*x,12*x,23*x,13*x,22*x);
     fill(88, 76, 65);
     triangle(13*x,22*x,12*x,23*x,14*x,22*x);
     fill(125, 109, 95);
     triangle(12*x,23*x,14*x,22*x,14*x,23*x);
     fill(44, 42, 37);
     triangle(14*x,22*x,16*x,21*x,14*x,23*x);
     fill(62, 55, 41);
     triangle(14*x+mouseX*r*0.01,23*x,16*x,21*x,17*x,22*x+mouseY*r*0.1);
     fill(44, 42, 37)
     triangle(16*x,21*x,17*x,22*x+mouseY*r*0.1,18*x,22*x);

     fill(125, 109, 95);
     triangle(16*x,21*x,18*x,21*x,18*x,22*x);
     fill(82, 63, 46);
     triangle(18*x,21*x,18*x,23*x,22*x,28*x);
     fill(69, 53, 41);
     triangle(18*x,21*x,20*x,21*x,22*x,28*x);
     fill(82, 63, 46);
     triangle(20*x,21*x,22*x,28*x,22*x,25*x);
     fill(69, 59, 46);
     triangle(12*x,23*x,11*x,25*x,12*x,24*x);  
     fill(88, 76, 65);
     rect(12*x, 23*x, 2*x, 1*x); 
     fill(62, 55, 41);

     triangle(16*x,24*x,17*x,22*x,18*x,22*x);
     fill(0);
     triangle(14*x+mouseX*r*0.01,23*x,17*x,22*x,16*x,24*x);
     fill(125, 109, 95);
     triangle(14*x,23*x,14*x,24*x,16*x,24*x);
     fill(157, 146, 127);
     triangle(17*x,23*x,18*x,22*x,18*x,23*x);
     fill(88, 76, 65);
     triangle(12*x,24*x,14*x,24*x,14*x,25*x);
     fill(88, 76, 65);
     triangle(14*x,24*x,16*x,24*x,14*x,25*x);
     fill(88, 76, 65);
     triangle(16*x,24*x,14*x,25*x,16*x,25*x);
     fill(88, 76, 65);
     triangle(16*x,24*x,16*x,25*x,17*x,25*x);
     fill(125, 109, 95);
     triangle(16*x,24*x,17*x,23*x,17*x,25*x);
     fill(82, 63, 46);
     rect(17*x,23*x,1*x,2*x);

      //tuck 
      fill(82, 63, 46);
      triangle(18*x,23*x,18*x,27*x,21*x,27*x);
      fill(62, 55, 41);
      triangle(11*x,25*x,12*x,24*x,13*x,26*x);
      fill(69, 59, 46);
      triangle(12*x,24*x,13*x,26*x,14*x,25*x);
      fill(82, 63, 46);
      triangle(14*x,25*x,16*x,24*x,16*x,27*x);
      fill(125, 109, 95);
      triangle(16*x,24*x,16*x,25*x,17*x,25*x);
      fill(69, 59, 46);
      triangle(11*x,25*x,11*x,29*x,10*x,28*x);
      fill(69, 59, 46);
      triangle(11*x,25*x,13*x,26*x,11*x,28*x);
      fill(82, 63, 46)
      triangle(13*x,26*x,11*x,28*x,14*x,29*x);
      fill(69, 59, 46);
      triangle(11*x,28*x,11*x,29*x,14*x,29*x);
      fill(69, 59, 46);
      triangle(11*x,29*x,12*x,29*x,12*x,30*x);
      fill(69, 53, 41);
      triangle(14*x,29*x,12*x,30*x,14*x,31*x);
      fill(82, 63, 46);
      triangle(13*x,26*x,15*x,26*x,14*x,29*x);

     //mok
     fill(95,75,56);
     triangle(16*x,28*x,17*x,30*x,14*x,31*x);
     fill(92,73,59);
     triangle(14*x,31*x,17*x,30*x,15*x,33*x);
     fill(98,79,61);
     triangle(16*x,28*x,17*x,29*x,17*x,30*x);
     fill(99,78,57);
     triangle(16*x,25*x,17*x,25*x,17*x,29*x);
     fill(130,115,99);
     triangle(17*x,25*x,18*x,25*x,17*x,30*x);
     fill(99,78,57);
     triangle(18*x,25*x,17*x,30*x,18*x,30*x);
     fill(97,78,61);
     triangle(16*x,25*x,16*x,27*x,17*x,29*x);
     fill(98,79,61);
     triangle(16*x,27*x,16*x,28*x,17*x,29*x);
     fill(99,81,63);
     triangle(15*x,26*x,16*x,26*x,16*x,27*x);
     fill(88,74,51);
     triangle(17*x,30*x,18*x,30*x,18*x,33*x);
     fill(98,77,55);
     triangle(18*x,27*x,21*x,30*x,19*x,31*x);
     fill(105,82,56);
     triangle(18*x,27*x,21*x,27*x,21*x,30*x);
     fill(88,73,56);
     triangle(21*x,27*x,22*x,28*x,21*x,30*x);
     fill(64,54,40);
     triangle(14*x,29*x,14*x,31*x,12*x,30*x);
     fill(74,63,48);
     triangle(14*x,29*x,15*x,29*x,14*x,31*x);
     fill(82,69,49);
     triangle(15*x,26*x,14*x,29*x,15*x,29*x);
     fill(74,63,48);
     triangle(15*x,29*x,14*x,31*x,16*x,28*x);

     //sujung
     fill(114,102,89);
     triangle(14*x,25*x,13*x,26*x,15*x,26*x);
     fill(61,49,35);
     triangle(12*x,29*x,14*x,29*x,12*x,30*x);
     fill(99,81,63);
     triangle(15*x,26*x,16*x,28*x,15*x,29*x);
     fill(98,79,61);
     triangle(15*x,26*x,16*x,27*x,16*x,28*x);
     fill(99,78,57);
     triangle(18*x,23*x,21*x,27*x,22*x,28*x);
     fill(98,50,57);
     triangle(18*x,27*x,18*x,33*x,19*x,31*x);


 }

 
 function drawTree(){
    
    //star//
    x=40;
    fill(251,176,59);
    triangle(17*x, 0, 14*x, 5*x, 20*x, 5*x);
    triangle(14*x, 2*x, 20*x, 2*x, 17*x, 7*x);

//tree1//
fill(6,52,29);
triangle(17*x, 6*x, 15*x, 11*x, 17*x, 9*x);
fill(51,154,106);
triangle(17*x, 6*x, 17*x, 9*x, 18*x, 10*x);
fill(6,52,29);
triangle(17*x, 6*x, 18*x, 10*x, 19*x, 11*x);
fill(4,105,55);
triangle(17*x, 9*x, 15*x, 11*x, 18*x, 10*x);
fill(6,52,29);
triangle(15*x, 11*x, 18*x, 10*x, 17*x, 12*x);
fill(5,129,68);
triangle(18*x, 10*x, 17*x, 12*x, 19*x, 11*x);
fill(4,78,81);
triangle(15*x, 11*x, 13*x, 16*x, 15*x, 16*x);
fill(4,105,55);
triangle(15*x, 11*x, 15*x, 14*x, 17*x, 16*x);
fill(6,52,29);
triangle(15*x, 11*x, 17*x, 16*x, 17*x, 14*x);
fill(4,78,81);
triangle(15*x, 11*x, 17*x, 14*x, 17*x, 12*x);
fill(4,105,55);
triangle(17*x, 12*x, 19*x, 11*x, 17*x, 14*x);
fill(4,78,81);
triangle(17*x, 14*x, 19*x, 11*x, 19*x, 14*x);
fill(51,154,106);
triangle(19*x, 11*x, 19*x, 14*x, 21*x, 16*x);
fill(4,105,55);
triangle(17*x, 14*x, 19*x, 14*x, 21*x, 16*x);
fill(6,52,29);
triangle(15*x, 14*x, 15*x, 16*x, 17*x, 16*x);
triangle(17*x, 14*x, 17*x, 16*x, 19*x, 15*x);
fill(51,154,106);
triangle(17*x, 16*x, 19*x, 15*x, 21*x, 16*x);
fill(4,78,81);
triangle(13*x, 16*x, 12*x, 18*x, 15*x, 16*x);
fill(4,105,55);
triangle(12*x, 18*x, 15*x, 16*x, 21*x, 16*x);

//line1//
fill(251,176,59);
triangle(12*x, 18*x, 21*x, 16*x, 17*x, 18*x);
fill(187,132,43);
triangle(17*x, 18*x, 21*x, 16*x, 22*x, 18*x);

//tree2//
fill(4,105,55);
triangle(12*x, 18*x, 11*x, 21*x, 13*x, 19*x);
fill(51,154,106);
triangle(12*x, 18*x, 17*x, 18*x, 13*x, 19*x);
fill(6,52,29);
triangle(13*x, 19*x, 15*x, 19*x, 17*x, 18*x);
fill(5,129,68);
triangle(11*x, 21*x, 13*x, 19*x, 15*x, 19*x);
fill(51,154,106);
triangle(15*x, 19*x, 15*x, 20*x, 11*x, 21*x);
fill(4,105,55);
triangle(15*x, 19*x, 15*x, 20*x, 17*x, 21*x);
fill(51,154,106);
triangle(15*x, 19*x, 17*x, 18*x, 17*x, 21*x);
fill(6,52,29);
triangle(17*x, 18*x, 17*x, 20*x, 21*x, 20*x);
fill(4,105,55);
triangle(17*x, 18*x, 22*x, 18*x, 23*x, 21*x);
fill(6,52,29);
triangle(17*x, 20*x, 21*x, 20*x, 18*x, 21*x);
fill(51,154,106);
triangle(17*x, 20*x, 17*x, 25*x, 18*x, 21*x);
fill(5,129,68);
triangle(18*x, 21*x, 21*x, 20*x, 23*x, 21*x);
fill(4,78,41);
triangle(18*x, 21*x, 20*x, 22*x, 23*x, 21*x);
fill(6,52,29);
triangle(18*x, 21*x, 17*x, 25*x, 20*x, 22*x);
fill(4,78,41);
triangle(17*x, 25*x, 20*x, 22*x, 23*x, 21*x);
fill(5,129,68);
triangle(17*x, 25*x, 20*x, 23*x, 24*x, 24*x);
fill(4,78,41);
triangle(20*x, 23*x, 23*x, 21*x, 24*x, 24*x);
fill(4,105,55);
triangle(11*x, 21*x, 15*x, 20*x, 14*x, 23*x);
fill(5,129,68);
triangle(14*x, 23*x, 15*x, 20*x, 17*x, 21*x);
fill(6,52,29);
triangle(14*x, 23*x, 17*x, 25*x, 17*x, 21*x);
fill(4,78,41);
triangle(11*x, 21*x, 17*x, 25*x, 12*x, 23*x);
fill(4,105,55);
triangle(12*x, 23*x, 14*x, 24*x, 17*x, 25*x);
fill(6,52,29);
triangle(11*x, 21*x, 9*x, 26*x, 12*x, 23*x);
fill(4,105,55);
triangle(12*x, 23*x, 9*x, 26*x, 14*x, 24*x);
fill(4,78,41);
triangle(9*x, 26*x, 14*x, 24*x, 12*x, 25*x);

//line2//
fill(251,176,59);
triangle(9*x, 26*x, 24*x, 24*x, 25*x, 25*x);
fill(187,132,43);
triangle(9*x, 26*x, 25*x, 25*x, 26*x, 26*x);

//tree3//
//Tree3//
fill(4,105,55);
triangle(9*x,26*x,25*x,26*x,15*x,27*x);
fill(51,154,106);
triangle(15*x,27*x,25*x,26*x,22*x,28*x);
fill(5,129,68);
triangle(9*x,26*x,15*x,28*x,22*x,28*x);
fill(4,105,55);
triangle(9*x,26*x,15*x,28*x,14*x,29*x);
fill(51,154,106);
triangle(9*x,26*x,14*x,29*x,11*x,29*x);
fill(4,105,55);
triangle(9*x,26*x,11*x,29*x,12*x,33*x);
fill(5,129,68);
triangle(9*x,26*x,12*x,33*x,9*x,30*x);
fill(51,154,106);
triangle(9*x,26*x,9*x,30*x,5*x,36*x);
fill(4,78,41);
triangle(9*x,30*x,12*x,33*x,5*x,36*x);
fill(6,52,29);
triangle(5*x,36*x,12*x,34*x,18*x,31*x);
fill(4,78,41);
triangle(5*x,36*x,12*x,34*x,28*x,34*x);
fill(6,52,29);
triangle(12*x,34*x,18*x,31*x,20*x,33*x);
fill(4,105,55);
triangle(18*x,31*x,20*x,33*x,28*x,34*x);
fill(5,129,68);
triangle(28*x,34*x,20*x,33*x,12*x,34*x);
fill(51,154,106);
triangle(28*x,34*x,25*x,33*x,26*x,29*x);
fill(4,78,41);
triangle(25*x,33*x,26*x,29*x,25*x,26*x);
fill(6,52,29);
triangle(25*x,26*x,25*x,30*x,22*x,28*x);
fill(51,154,106);
triangle(25*x,33*x,25*x,30*x,22*x,28*x);
fill(4,105,55);
triangle(25*x,33*x,22*x,30*x,22*x,28*x);
fill(51,154,106);
triangle(25*x,33*x,22*x,30*x,23*x,31*x);
fill(4,105,55);
triangle(22*x,28*x,22*x,30*x,18*x,31*x);
fill(5,129,68);
triangle(18*x,31*x,18*x,29*x,22*x,28*x);
fill(4,78,41);
triangle(18*x,31*x,18*x,29*x,16*x,30*x);
fill(5,129,68);
triangle(16*x,30*x,13*x,29*x,14*x,29*x);
fill(6,52,29);
triangle(14*x,29*x,13*x,29*x,17*x,28*x);
fill(51,154,106);
triangle(11*x,29*x,14*x,29*x,12*x,33*x);
fill(4,105,55);
triangle(14*x,29*x,12*x,33*x,18*x,31*x);
fill(6,52,29);
triangle(18*x,31*x,22*x,30*x,25*x,33*x);
fill(4,78,41);
triangle(9*x, 26*x, 14*x, 24*x, 17*x, 25*x);

//line3//
fill(251,176,59);
triangle(5*x, 36*x, 28*x, 34*x, 29*x, 35*x);
fill(187,132,43);
triangle(5*x, 36*x, 29*x, 35*x, 30*x, 36*x);

//tree4//
fill(51,154,106);
triangle(5*x, 36*x, 20*x, 36*x, 11*x, 37*x);
fill(4,105,55);
triangle(5*x, 36*x, 11*x, 37*x, 12*x, 41*x);
fill(5,129,68);
triangle(5*x, 36*x, 7*x, 39*x, 12*x, 41*x);
fill(4,78,41);
triangle(5*x, 36*x, 3*x, 41*x, 7*x, 39*x);
fill(51,154,106);
triangle(3*x, 41*x, 7*x, 39*x, 12*x, 41*x);
fill(4,105,55);
triangle(11*x, 37*x, 12*x, 41*x, 20*x, 36*x);
fill(51,154,106);
triangle(12*x, 41*x, 20*x, 36*x, 22*x, 39*x);
fill(6,52,29);
triangle(20*x, 36*x, 29*x, 36*x, 26*x, 37*x);
fill(5,129,68);
triangle(20*x, 36*x, 26*x, 37*x, 31*x, 41*x);
fill(4,78,41);
triangle(20*x, 36*x, 22*x, 39*x, 31*x, 41*x);
fill(51,154,106);
triangle(26*x, 37*x, 29*x, 36*x, 31*x, 41*x);
fill(4,105,55);
triangle(12*x, 41*x, 22*x, 39*x, 31*x, 41*x);
fill(5,129,68);
triangle(14*x,24*x,17*x,25*x,9*x,21*x);
fill(4,78,41);
triangle(15*x,28*x,22*x,28*x,14*x,29*x);
fill(5,129,68);
triangle(14*x,29*x,18*x,29*x,22*x,28*x);
fill(6,52,29);
triangle(14*x,29*x,16*x,30*x,18*x,29*x);
fill(5,129,68);
triangle(5*x,36*x, 12*x, 34*x, 12*x, 33*x);
fill(6,52,29);
triangle(12*x, 33*x, 12*x, 34*x, 18*x, 31*x);

}





function drawSnow(){
    var r=Math.random();
    stroke(255,255,255,128);
    strokeWeight(20);

    fill(255);
    ellipse(700,dir1,50,50);
    ellipse(100,dir1+500,20,20);
    ellipse(200,dir1+r,30,30);
    ellipse(300,dir1+800,25,25);
    ellipse(400,dir1+100,20,20);
    ellipse(500,dir1+350,34,34);
    ellipse(600,dir1+270,47,47);
    ellipse(800,dir1+900,25,25);
    ellipse(900,dir1+670,34,34);
    ellipse(1000,dir1+230,17,17);
    ellipse(1100,dir1+590,28,28);
    ellipse(1200,dir1+312,33,33);
    ellipse(1300,dir1+100,50,50);
    ellipse(1400,dir1+400,27,27);
    ellipse(1500,dir1+777,35,35);
    dir1=dir1+3;     
    if(dir1>1700){
     dir1=-1700;
 }


 fill(255);
 ellipse(700,dir2,50,50);
 ellipse(100,dir2+500,20,20);
 ellipse(200,dir2+r,30,30);
 ellipse(300,dir2+800,25,25);
 ellipse(400,dir2+100,20,20);
 ellipse(500,dir2+350,34,34);
 ellipse(600,dir2+270,47,47);
 ellipse(800,dir2+900,25,25);
 ellipse(900,dir2+670,34,34);
 ellipse(1000,dir2+230,17,17);
 ellipse(1100,dir2+590,28,28);
 ellipse(1200,dir2+312,33,33);
 ellipse(1300,dir2+100,50,50);
 ellipse(1400,dir2+400,27,27);
 ellipse(1500,dir2+777,35,35);
 dir2=dir2+3;     
 if(dir2>1700){
  dir2=-1700;
}
fill(255);
ellipse(700,dir3,50,50);
ellipse(100,dir3+500,20,20);
ellipse(200,dir3+r,30,30);
ellipse(300,dir3+800,25,25);
ellipse(400,dir3+100,20,20);
ellipse(500,dir3+350,34,34);
ellipse(600,dir3+270,47,47);
ellipse(800,dir3+900,25,25);
ellipse(900,dir3+670,34,34);
ellipse(1000,dir3+230,17,17);
ellipse(1100,dir3+590,28,28);
ellipse(1200,dir3+312,33,33);
ellipse(1300,dir3+100,50,50);
ellipse(1400,dir3+400,27,27);
ellipse(1500,dir3+777,35,35);
dir3=dir3+3;     
if(dir3>1700){
  dir3=-1700;
}
fill(255);
ellipse(700,dir4,50,50);
ellipse(100,dir4+500,20,20);
ellipse(200,dir4+r,30,30);
ellipse(300,dir4+800,25,25);
ellipse(400,dir4+100,20,20);
ellipse(500,dir4+350,34,34);
ellipse(600,dir4+270,47,47);
ellipse(800,dir4+900,25,25);
ellipse(900,dir4+670,34,34);
ellipse(1000,dir4+230,17,17);
ellipse(1100,dir4+590,28,28);
ellipse(1200,dir4+312,33,33);
ellipse(1300,dir4+100,50,50);
ellipse(1400,dir4+400,27,27);
ellipse(1500,dir4+777,35,35);
dir4=dir4+3;     
if(dir4>1700){
  dir4=-1700;
}

}
function drawMouse(){
     //bell
     var a=[];
     var x;
     x= 50;
     fill(241,181,0);
     noStroke();
     triangle(mouseX+2*x,mouseY+1*x,mouseX+1*x,mouseY+2*x,mouseX+2*x,mouseY+2*x);
     rect(mouseX+2*x,mouseY+1*x,1*x,1*x);
     triangle(mouseX+3*x,mouseY+1*x,mouseX+3*x,mouseY+2*x,mouseX+4*x,mouseY+2*x);
     rect(mouseX+1*x,mouseY+2*x,3*x,2*x);
     triangle(mouseX+1*x,mouseY+3*x,mouseX+0*x,mouseY+4*x,mouseX+1*x,mouseY+4*x);
     triangle(mouseX+4*x,mouseY+3*x,mouseX+4*x,mouseY+4*x,mouseX+5*x,mouseY+4*x);
     fill(204,149,0);
     rect(mouseX+2*x,mouseY+4*x,1*x,1*x);
     //mouse ellipse
      fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
     ellipse(mouseX,mouseY,100,100);
     //trail ellipse #0
    
     stroke(255, 255, 255, 128);
     strokeWeight(10);
     trailX[0]=(mouseX+trailX[0]*4)/5;
     trailY[0]=(mouseY+trailY[0]*4)/5;
     ellipse(trailX[0],trailY[0],60,60);

     for(var i=1; i<10; i=i+1)
     {
         trailX[i]=(trailX[i-1]+trailX[i]*5)/6;
         trailY[i]=(trailY[i-1]+trailY[i]*5)/6;
         ellipse(trailX[i],trailY[i],60,60);
     }

 }

