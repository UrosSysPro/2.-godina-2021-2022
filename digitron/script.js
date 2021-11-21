function unesi(a){
    let zadatak=document.getElementById("zadatak");
    zadatak.value+=a;
}

function izracunaj(){
    let zadatak=document.getElementById("zadatak").value;

    let a="";
    let b="";
    let operator="";

    let i=0;
    while(true){
        let c=zadatak[i];
        if(isNaN(parseInt(c)))break;
        a+=c;
        i++;
    }
    operator=zadatak[i];
    i++;
    while(i<zadatak.length){
        b+=zadatak[i];
        i++;
    }

    a=parseInt(a);
    b=parseInt(b);
    let resenje;

    switch(operator){
        case "+":resenje=a+b; break;
        case "-":resenje=a-b; break;
        case "*":resenje=a*b; break;
        case "/":resenje=a/b; break;
        case "%":resenje=a%b; break;
    }
    document.getElementById("zadatak").value=resenje;
}