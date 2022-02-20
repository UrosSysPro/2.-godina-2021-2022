let mapa=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,],[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,],[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,],[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,],[1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],[1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,],[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,],[1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],[1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,],[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,],[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,],[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],]
let n=19;
let sirinaPolja=20;
let zidovi=[];
let px;
let py;
let vx;
let vy;
let novoVx;
let novoVy;
let playerDiv;
let igraDiv;

let duh1;



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

    px=parseInt(n/2)+2;
    py=parseInt(n/2);
    novoVx=1;
    novoVy=0;
    vx=1;
    vy=0;
    playerDiv=document.createElement("div");
    playerDiv.classList.add("player");
    igraDiv.appendChild(playerDiv);

    let div=document.createElement("div");
    div.classList.add("duh1");
    igraDiv.appendChild(div);

    duh1={
        x:parseInt(n/2),
        y:parseInt(n/2),
        vx:0,
        vy:0,
        div:div
    }

    
    setInterval(update, 200);
}

function update(){
    if(px+novoVx>=n||px+novoVx<0||py+novoVy>=n||py+novoVy<0||mapa[px+novoVx][py+novoVy]==0){
        vx=novoVx;
        vy=novoVy;
    }



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
    updateDuh1();
    move();
}

function keyDown(e){
    if(e.key=="ArrowUp"){novoVy=-1;novoVx=0;}
    if(e.key=="ArrowDown"){novoVy= 1;novoVx=0;}
    if(e.key=="ArrowLeft"){novoVy=0;novoVx=-1;}
    if(e.key=="ArrowRight"){novoVy=0;novoVx=1;}
}



function move(){
    let x=px*sirinaPolja;
    let y=py*sirinaPolja;
    playerDiv.style.top=y+"px";
    playerDiv.style.left=x+"px";
    
    duh1.div.style.top=duh1.y*sirinaPolja+"px";
    duh1.div.style.left=duh1.x*sirinaPolja+"px";
}

// function updateDuh1(){
//     let mat=[];
//     for(let i=0;i<n;i++){
//         mat.push([]);
//         for(let j=0;j<n;j++){
//             mat[i].push(-1);
//         }
//     }
//     mat[px][py]=0;
//     let red=[];
//     red.push({x:px,y:py});
//     while(red.length!=0){
//         let tacka=red.shift();
//         let brKoraka=mat[tacka.x][tacka.y];

//         if(tacka.x+1<n && mapa[tacka.x+1][tacka.y] && mat[tacka.x+1][tacka.y]==-1){
//             mat[tacka.x+1][tacka.y]=brKoraka+1;
//             red.push({x:tacka.x+1,y:tacka.y});
//         }
//         if(tacka.x-1<n && mapa[tacka.x-1][tacka.y] && mat[tacka.x-1][tacka.y]==-1){
//             mat[tacka.x-1][tacka.y]=brKoraka+1;
//             red.push({x:tacka.x-1,y:tacka.y});
//         }
//         if(tacka.y+1<n && mapa[tacka.x][tacka.y+1] && mat[tacka.x][tacka.y+1]==-1){
//             mat[tacka.x][tacka.y+1]=brKoraka+1;
//             red.push({x:tacka.x,y:tacka.y+1});
//         }
//         if(tacka.y-1<n && mapa[tacka.x][tacka.y-1] && mat[tacka.x][tacka.y-1]==-1){
//             mat[tacka.x][tacka.y-1]=brKoraka+1;
//             red.push({x:tacka.x,y:tacka.y-1});
//         }
//     }
//     console.log(mat);
// }

function updateDuh1(){
    let mat=[];
    for(let i=0;i<n;i++){
        mat.push([]);
        for(let j=0;j<n;j++){
            if(mapa[i][j]==1)
                mat[i].push(-2);
            else
                mat[i].push(-1);
        }
    }
    mat[px][py]=0;

    let red=[];
    red.push({x:px,y:py});

    while(red.length!=0){
        let point=red.shift();
        let x=point.x;
        let y=point.y;
        if(y-1>=0&&mat[x][y-1]==-1){
            mat[x][y-1]=mat[x][y]+1;
            red.push({x:x,y:y-1});
        }
        if(y+1<n&&mat[x][y+1]==-1){
            mat[x][y+1]=mat[x][y]+1;
            red.push({x:x,y:y+1});
        }
        if(x-1>=0&&mat[x-1][y]==-1){
            mat[x-1][y]=mat[x][y]+1;
            red.push({x:x-1,y:y});
        }
        if(x+1<n&&mat[x+1][y]==-1){
            mat[x+1][y]=mat[x][y]+1;
            red.push({x:x+1,y:y});
        }
    }
    let razdaljina=mat[duh1.x][duh1.y];
    duh1.vx=0;
    duh1.vy=0;
    if(mat[duh1.x-1][duh1.y]<razdaljina)duh1.vx=-1;
    if(mat[duh1.x+1][duh1.y]<razdaljina)duh1.vx=1;
    if(mat[duh1.x][duh1.y-1]<razdaljina)duh1.vy=-1;
    if(mat[duh1.x][duh1.y+1]<razdaljina)duh1.vy=1;

    duh1.x+=duh1.vx;
    duh1.y+=duh1.vy;


}