let sirina=12;
let visina=22;
let velicina=20;
let ekran;

let tabela;

let oblici=[
    [[1,0,0],
    [1,1,1]],

    [[0,1,0],
    [1,1,1]],

    [[1,1],
    [1,1]],
];

let trenutniOblik;
let posy;
let posx;


function load(){
    ekran=[];
    tabela=[];
    for(let i=0;i<sirina;i++){
        ekran.push([]);
        tabela.push([]);
        for(let j=0;j<visina;j++){
            ekran[i].push(0);
            tabela[i].push(false);
        }
    }

    for(let j=0;j<visina;j++){
        for(let i=0;i<sirina;i++){
            let div=document.createElement("div");
            div.classList.add("stasis");
            
            ekran[i][j]=div;
            document.body.appendChild(div);

        }
        let enter=document.createElement("br");
        document.body.appendChild(enter);
    }

    for(let j=0;j<visina;j++){
        ekran[0][j].style.backgroundColor="black";
        ekran[sirina-1][j].style.backgroundColor="black";
        tabela[0][j]=true;
        tabela[sirina-1][j]=true;
    }
    for(let i=0;i<sirina;i++){
        ekran[i][visina-1].style.backgroundColor="black";
        tabela[i][visina-1]=true;
    }

    posy=0;
    posx=sirina/2;


    
    setInterval(() => {
        update();
        draw();
    }, 1000/2);
}



function update(){

}
function draw(){
    for(let j=0;j<visina;j++){
        for(let i=0;i<sirina;i++){
            if(tabela[i][j]){
                ekran[i][j].style.backgroundColor="black";
            }else{
                ekran[i][j].style.backgroundColor="violet";
            }
        }
    }
}

