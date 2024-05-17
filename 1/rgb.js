let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  

}


function draw() {
   rect(20, 20, 700, 500);
   frameRate(0.5);
   if(x==0){
     fill(255, 0, 0);
     x=1;
   }else{
     if(x==1){
       fill(0, 255, 0);
       x=2;
     }else{
       fill(0, 0, 255);
       x=0;
     }
   }

   
   
   loop();
}
