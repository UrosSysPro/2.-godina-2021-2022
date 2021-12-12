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

    document.body.addEventListener("keydown",strelicaDole);
    document.body.addEventListener("keyup",strelicaGore);

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
    pomeriLoptu();    

    input();

    premestiIgrace();
}

function input(){
    let brzina=7;
    if(keyW==true){
        p1y-=brzina;
        if(p1y<0)p1y=0;
    }
    if(keyS==true){
        p1y+=brzina;
        if(p1y+playerHeight>h)p1y=h-playerHeight;
    }
    if(keyUp==true){
        p2y-=brzina;
        if(p2y<0)p2y=0;
    }
    if(keyDown==true){
        p2y+=brzina;
        if(p2y+playerHeight>h)p2y=h-playerHeight;
    }
}

function pomeriLoptu(){
    bx+=vLopteX;
    by+=vLopteY;
    if(by+ballHeight>=h||by<=0)vLopteY=-vLopteY;

    if(bx+ballWidth>w){
        let score1=document.getElementById("score1");
        let s=parseInt(score1.innerHTML)+1;
        score1.innerHTML=s;
        bx=w/2-ballWidth/2;
        by=h/2-ballHeight/2;
        vLopteX=-4;
        vLopteY=0;
    }
    if(bx<0){
        let score2=document.getElementById("score2");
        let s=parseInt(score2.innerHTML)+1;
        score2.innerHTML=s;
        bx=w/2-ballWidth/2;
        by=h/2-ballHeight/2;
        vLopteX=4;
        vLopteY=0;
    }

    if((bx>p1x+playerWidth)||(by+ballHeight<p1y)||(bx+ballWidth<p1x)||(by>p1y+playerHeight)){
        // ne dodoiruju se
    }else{
        // console.log("lopta udara u igraca 1");
        vLopteX=4;
        let ugao=by+ballHeight/2-p1y-playerHeight/2;
        vLopteY=ugao/10;
        // vLopteY=//nesto
    }
    if((bx>p2x+playerWidth)||(by+ballHeight<p2y)||(bx+ballWidth<p2x)||(by>p2y+playerHeight)){
        // ne dodoiruju se
    }else{
        // console.log("lopta udara u igraca 2");
        vLopteX=-4;
        let ugao=by+ballHeight/2-p2y-playerHeight/2;
        vLopteY=ugao/10;
        // vLopteY=nesto
    }
}


function strelicaDole(e){
    if(e.key=="w")keyW=true;
    if(e.key=="s")keyS=true;
    if(e.key=="ArrowUp")keyUp=true;
    if(e.key=="ArrowDown")keyDown=true;
}

function strelicaGore(e){
    if(e.key=="w")keyW=false;
    if(e.key=="s")keyS=false;
    if(e.key=="ArrowUp")keyUp=false;
    if(e.key=="ArrowDown")keyDown=false;
}