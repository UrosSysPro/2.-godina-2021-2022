let player1Div;
let player2Div;
let p1x;
let p1y;
let p2x;
let p2y;
let playerWidth;
let playerHeight;

let w,h;

function main(){
    playerWidth=20;
    playerHeight=180;

    w=window.innerWidth;
    h=window.innerHeight;

    player1Div=document.getElementById("player1");
    player2Div=document.getElementById("player2");

    p1x=10;
    p2x=w-10-playerWidth;

    p1y=p2y=h/2-playerHeight/2;

    premestiIgrace();
}

function premestiIgrace(){
    player1Div.style.top=p1y+"px";
    player1Div.style.left=p1x+"px";
    
    player2Div.style.top=p2y+"px";
    player2Div.style.left=p2x+"px";
}