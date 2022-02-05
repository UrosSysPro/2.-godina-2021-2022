function main(){
    let n=19;

    for(let j=0;j<n;j++){
        for(let i=0;i<n;i++){
            let div=document.createElement("div");
            div.classList.add("polje");
            div.addEventListener("click",click);
            document.body.appendChild(div);
        }
        let enter=document.createElement("br");
        document.body.appendChild(enter);
    }
}

function click(e){
    let div=e.target;
    div.classList.toggle("selected");
}

function save(){
    
    let polja=document.getElementsByClassName("polje");
    let n=Math.sqrt(polja.length);

    let rezultat="[";
    
    for(let j=0;j<n;j++){
        rezultat+="[";
        for(let i=0;i<n;i++){
            let index=i+j*n;
            if(polja[index].classList.contains("selected")){
                rezultat+="1,";
            }else{
                rezultat+="0,"
            }
        }
        rezultat+="],";
    }
    rezultat+="]";
    console.log(rezultat);
}