
function setup() {
    createCanvas(2000, 2000);
    var x;
     x= 50;
    stroke(255,255,255);

    noFill();
   // backgroundColor = color(0, 0, 0, 255);
   

}
function draw(){
     background(255,255,255);
     var x;
     x= 50;
     fillColor = color(
     Math. random() *255,
     Math. random() *255, 
     Math. random() *255, 
     Math. random() *255);

     mouseColor = color(
     mouseX / 640 * 200 + Math. random() * 200,
     mouseY / 480 * 255, 0);


     fill(mouseColor);
     //reft bbul
     triangle(4*x,1*x,3*x,3*x,4*x,3*x);
     rect(3*x,3*x,1*x,3*x);
     triangle(7*x,3*x,5*x,6*x,6*x,6*x);
     triangle(3*x,6*x,2*x,7*x,3*x,7*x);
     
     triangle(3*x,6*x,4*x,6*x,3*x,7*x);
     
     triangle(5*x,6*x,5*x,8*x,6*x,8*x);
     
     triangle(5*x,6*x,6*x,6*x,6*x,8*x);
    
     rect(2*x,7*x,1*x,1*x);
    
     triangle(3*x,7*x,3*x,8*x,4*x,8*x);
     
     rect (2*x,8*x,2*x,2*x);
     
     triangle(4*x,8*x,4*x,10*x,5*x,10*x);
     
     triangle(5*x,8*x,6*x,8*x,6*x,10*x);
     triangle(6*x,8*x,6*x,10*x,7*x,10*x);
     triangle(3*x,10*x,4*x,10*x,4*x,11*x);
         
     rect(4*x,10*x,3*x,1*x);
     
     triangle(7*x,10*x,7*x,11*x,8*x,11*x);
     triangle(7*x,11*x,8*x,11*x,8*x,12*x);
     rect(8*x,11*x,1*x,1*x);
     triangle(9*x,12*x,10*x,8*x,11*x,12*x);
     triangle(8*x,12*x,11*x,12*x,11*x,15*x);
     triangle(11*x,13*x,11*x,15*x,12*x,15*x);

     //right bbul
     triangle(25*x,2*x,25*x,4*x,26*x,4*x);
     triangle(22*x,4*x,23*x,7*x,24*x,9*x);
     rect(25*x,4*x,1*x,3*x);
     triangle(23*x,7*x,24*x,7*x,23*x,9*x);
     triangle(24*x,7*x,23*x,9*x,24*x,9*x);
     triangle(25*x,7*x,26*x,7*x,26*x,8*x);
     triangle(26*x,7*x,26*x,8*x,27*x,8*x);
     triangle(26*x,8*x,25*x,9*x,26*x,9*x);
     rect(26*x,8*x,1*x,1*x);
     triangle(23*x,9*x,22*x,11*x,23*x,11*x);
     triangle(23*x,9*x,24*x,9*x,23*x,11*x);
     triangle(25*x,9*x,24*x,11*x,25*x,11*x);
     rect(25*x,9*x,2*x,2*x);
     triangle(22*x,11*x,21*x,12*x,22*x,12*x);
     rect(22*x,11*x,3*x,1*x);
     triangle(25*x,11*x,26*x,11*x,25*x,12*x);
     rect(20*x,12*x,1*x,1*x);
     triangle(21*x,12*x,22*x,12*x,21*x,13*x);
     triangle(18*x,13*x,16*x,15*x,18*x,15*x);
     triangle(18*x,13*x,21*x,13*x,18*x,16*x);

     //reft ear
     triangle(5*x,14*x,6*x,13*x,7*x,14*x);
     triangle(5*x,14*x,7*x,14*x,7*x,15*x);
     triangle(7*x,15*x,7*x,16*x,9*x,15*x);
     triangle(5*x,14*x,7*x,15*x,7*x,16*x);
     triangle(5*x,14*x,6*x,17*x,7*x,16*x);
     triangle(7*x,16*x,9*x,15*x,12*x,16*x);
     triangle(7*x,16*x,6*x,17*x,8*x,18*x);
     triangle(7*x,16*x,10*x,16*x,8*x,18*x);
     triangle(10*x,16*x,8*x,18*x,11*x,17*x);
     triangle(10*x,16*x,11*x,16*x,11*x,17*x);
     rect(11*x, 16*x, 1*x, 1*x);
     triangle(11*x,17*x,8*x,18*x,11*x,18*x);
     rect(11*x,17*x,2*x, 1*x);
     triangle(10*x,18*x,12*x,18*x,11*x,19*x);

      //right ear
     triangle(18*x,16*x,22*x,14*x,24*x,14*x);
     triangle(18*x,16*x,21*x,16*x,24*x,14*x);
     triangle(21*x,16*x,24*x,14*x,24*x,16*x);
     triangle(24*x,14*x,25*x,14*x,24*x,15*x);
     triangle(18*x,16*x,19*x,16*x,19*x,18*x);
     triangle(19*x,16*x,19*x,18*x,22*x,18*x);
     triangle(19*x,16*x,21*x,16*x,22*x,18*x);
     triangle(21*x,16*x,24*x,16*x,22*x,18*x);
     triangle(18*x,16*x,18*x,18*x,19*x,18*x);
     triangle(18*x,18*x,19*x,18*x,18*x,19*x);

      //face
      triangle(11*x,15*x,14*x,15*x,12*x,16*x);
      triangle(12*x,16*x,14*x,15*x,14*x,16*x);

      rect(14*x, 15*x, 2*x, 2*x);
      triangle(16*x,15*x,17*x,15*x,16*x,17*x);
      triangle(17*x,15*x,18*x,16*x,16*x,17*x);
      triangle(17*x,15*x,18*x,15*x,18*x,16*x);
      triangle(12*x,16*x,14*x,16*x,14*x,17*x);
      triangle(12*x,16*x,12*x,17*x,14*x,17*x);
      triangle(16*x,17*x,18*x,17*x,18*x,16*x);
      triangle(13*x,17*x,13*x,18*x,14*x,18*x);
      triangle(13*x,17*x,15*x,17*x,14*x,18*x);
      triangle(14*x,18*x,15*x,17*x,15*x,18*x);
      rect(15*x,17*x,1*x,1*x);
      triangle(16*x,17*x,17*x,17*x,17*x,19*x);
      rect(17*x,17*x,1*x,1*x);
      //eye
      fill(44, 42, 37);
      triangle(17*x,19*x,18*x,19*x,18*x,18*x);
      //triangle(17*x,18*x,17*x,19*x,18*x,17*x);
      triangle(17*x,18*x,17*x,19*x,18*x,18*x);
      
      fill(mouseColor);
      triangle(16*x,17*x,16*x,20*x,18*x,21*x);
      triangle(17*x,19*x,18*x,19*x,18*x,21*x);
      triangle(11*x,19*x,12*x,18*x,12*x,20*x);
      //eye
      fill(44, 42, 37);
      triangle(12*x,18*x,13*x,18*x,13*x,19*x);
      triangle(12*x,18*x,12*x,19*x,13*x,19*x);
      
      fill(mouseColor);
      triangle(12*x,19*x,12*x,20*x,14*x,19*x);
      triangle(13*x,22*x,14*x,22*x,14*x,21*x);
      triangle(13*x,18*x,14*x,18*x,14*x,19*x);
      triangle(13*x,18*x,13*x,19*x,14*x,19*x);
      triangle(14*x,18*x,16*x,18*x,14*x,19*x);
      triangle(14*x,19*x,16*x,18*x,15*x,20*x);
      triangle(16*x,18*x,15*x,20*x,16*x,21*x);
      triangle(12*x,20*x,14*x,19*x,13*x,22*x);
      triangle(12*x,20*x,14*x,19*x,13*x,22*x);
      triangle(14*x,19*x,13*x,22*x,14*x,21*x);
      triangle(14*x,19*x,14*x,22*x,15*x,20*x);
      triangle(15*x,20*x,14*x,22*x,16*x,21*x);
      triangle(16*x,20*x,16*x,21*x,18*x,21*x);
     
     //face under
      triangle(12*x,20*x,12*x,23*x,13*x,22*x);
      triangle(13*x,22*x,12*x,23*x,14*x,22*x);
      triangle(12*x,23*x,14*x,22*x,14*x,23*x);
      triangle(14*x,22*x,16*x,21*x,14*x,23*x);
      fill(44, 42, 37);
      triangle(14*x,23*x,16*x,21*x,17*x,22*x);
      triangle(16*x,21*x,17*x,22*x,18*x,22*x);
      
      fill(mouseColor);
      triangle(16*x,21*x,18*x,21*x,18*x,22*x);
      triangle(18*x,21*x,18*x,23*x,22*x,28*x);
      triangle(18*x,21*x,20*x,21*x,22*x,28*x);
      triangle(20*x,21*x,22*x,28*x,22*x,25*x);
      triangle(12*x,23*x,11*x,25*x,12*x,24*x);  
      rect(12*x, 23*x, 2*x, 1*x); 
      fill(44, 42, 37);
      
      triangle(16*x,24*x,17*x,22*x,18*x,22*x);
      triangle(14*x,23*x,17*x,22*x,16*x,24*x);
      fill(mouseColor);
      triangle(14*x,23*x,14*x,24*x,16*x,24*x);
      triangle(17*x,23*x,18*x,22*x,18*x,23*x);
      triangle(12*x,24*x,14*x,24*x,14*x,25*x);
      triangle(14*x,24*x,16*x,24*x,14*x,25*x);
      triangle(16*x,24*x,14*x,25*x,16*x,25*x);
      triangle(16*x,24*x,16*x,25*x,17*x,25*x);
      triangle(16*x,24*x,17*x,23*x,17*x,25*x);
      rect(17*x,23*x,1*x,2*x);

      //tuck 
      triangle(18*x,23*x,18*x,27*x,21*x,27*x);
      triangle(11*x,25*x,12*x,24*x,13*x,26*x);
      triangle(12*x,24*x,13*x,26*x,14*x,25*x);
      triangle(14*x,25*x,16*x,24*x,16*x,27*x);
      triangle(16*x,24*x,16*x,25*x,17*x,25*x);
      triangle(11*x,25*x,11*x,29*x,10*x,28*x);
      triangle(11*x,25*x,13*x,26*x,11*x,28*x);
      
      triangle(13*x,26*x,11*x,28*x,14*x,29*x);
      triangle(11*x,28*x,11*x,29*x,14*x,29*x);
      triangle(11*x,29*x,12*x,29*x,12*x,30*x);
     
      triangle(14*x,29*x,12*x,30*x,14*x,31*x);
      triangle(13*x,26*x,15*x,26*x,14*x,29*x);

      //mok

      triangle(16*x,28*x,17*x,30*x,14*x,31*x);
      
      triangle(14*x,31*x,17*x,30*x,15*x,33*x);
      triangle(16*x,28*x,17*x,29*x,17*x,30*x);
      triangle(16*x,25*x,17*x,25*x,17*x,29*x);
      triangle(17*x,25*x,18*x,25*x,17*x,30*x);
      triangle(18*x,25*x,17*x,30*x,18*x,30*x);
      triangle(16*x,25*x,16*x,27*x,17*x,29*x);
      triangle(16*x,27*x,16*x,28*x,17*x,29*x);
      triangle(15*x,26*x,16*x,26*x,16*x,27*x);
      triangle(17*x,30*x,18*x,30*x,18*x,33*x);
      triangle(18*x,27*x,21*x,30*x,19*x,31*x);
      triangle(18*x,27*x,21*x,27*x,21*x,30*x);
      triangle(21*x,27*x,22*x,28*x,21*x,30*x);
      triangle(14*x,29*x,14*x,31*x,12*x,30*x);
      triangle(14*x,29*x,15*x,29*x,14*x,31*x);
      triangle(15*x,26*x,14*x,29*x,15*x,29*x);
      triangle(15*x,29*x,14*x,31*x,16*x,28*x);

      //sujung
      triangle(14*x,25*x,13*x,26*x,15*x,26*x);
      triangle(12*x,29*x,14*x,29*x,12*x,30*x);
      triangle(15*x,26*x,16*x,28*x,15*x,29*x);
      triangle(15*x,26*x,16*x,27*x,16*x,28*x);
      triangle(18*x,23*x,21*x,27*x,22*x,28*x);
      triangle(18*x,27*x,18*x,33*x,19*x,31*x);

 

















}