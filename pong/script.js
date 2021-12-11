let player1Div;
let player2Div;
let ballDiv;
let p1x;
let p1y;
let p2x;
let p2y;
let bx;
let by;
let playerWidth;
let playerHeight;
let ballWidth;
let ballHeight;
let w,h;

let keyW;
let keyS;
let keyUp;
let keyDown;
// w s < >

let vLopteX;
let vLopteY;

function main(){
    vLopteX=4;
    vLopteY=3;

    playerWidth=20;
    playerHeight=180;

    ballWidth=20;
    ballHeight=20;

    w=window.innerWidth;
    h=window.innerHeight;

    player1Div=document.getElementById("player1");
    player2Div=document.getElementById("player2");
    ballDiv=document.getElementById("ball");

    p1x=10;
    p2x=w-10-playerWidth;

    p1y=p2y=h/2-playerHeight/2;

    bx=w/2-ballWidth/2;
    by=h/2-ballHeight/2;

    premestiIgrace();
    setInterval(loop,1000/60);
}

function premestiIgrace(){
    player1Div.style.top=p1y+"px";
    player1Div.style.left=p1x+"px";
    
    player2Div.style.top=p2y+"px";
    player2Div.style.left=p2x+"px";

    ballDiv.style.top=by+"px";
    ballDiv.style.left=bx+"px"; 
}


function loop(){
    bx+=vLopteX;
    by+=vLopteY;
    if(bx+ballWidth>=w||bx<=0)vLopteX=-vLopteX;
    if(by+ballHeight>=h||by<=0)vLopteY=-vLopteY;

    premestiIgrace();
}