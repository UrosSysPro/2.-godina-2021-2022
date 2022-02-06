let mapa=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,],
[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,],
[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,],
[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,],
[1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,],
[1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],]

let n=19;
let sirinaPolja=20;
let zidovi=[];
let px;
let py;
let vx;
let vy;
let playerDiv;
let igraDiv;


function main(){
    igraDiv=document.getElementById("igra");
    document.body.addEventListener("keydown",keyDown);

    console.log(igraDiv);

    for(let j=0;j<n;j++){
        for(let i=0;i<n;i++){
   
            let div=document.createElement("div");
            div.classList.add("polje");
            if(mapa[i][j]==1){
                div.classList.add("zid");
            }

            igraDiv.appendChild(div);
        }
        let enter=document.createElement("br");
        igraDiv.appendChild(enter);
    }

    px=parseInt(n/2);
    py=parseInt(n/2);
    vx=1;
    vy=0;
    playerDiv=document.createElement("div");
    playerDiv.classList.add("player");
    igraDiv.appendChild(playerDiv);

    setInterval(update, 300);
}

function update(){
    px+=vx;
    py+=vy;
    if(px>=n)px=0;
    if(py>=n)py=0;
    if(px<0)px=n-1;
    if(py<0)py=n-1;
    
    if(mapa[px][py]==1){
        px-=vx;
        py-=vy;
    }
    movePlayer();
}

function keyDown(e){
    if(e.key=="ArrowUp"){vy=-1;vx=0;}
    if(e.key=="ArrowDown"){vy= 1;vx=0;}
    if(e.key=="ArrowLeft"){vy=0;vx=-1;}
    if(e.key=="ArrowRight"){vy=0;vx=1;}
}



function movePlayer(){
    let x=px*sirinaPolja;
    let y=py*sirinaPolja;
    playerDiv.style.top=y+"px";
    playerDiv.style.left=x+"px";
    
}

