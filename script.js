let contador1 = 0;
let contador2 = 0;
let contador3 = 0;

let intervalo = setInterval(() => {

if(contador1 < 500){
contador1 += 5;
document.getElementById("n1").innerText = contador1;
}

if(contador2 < 120){
contador2 += 2;
document.getElementById("n2").innerText = contador2;
}

if(contador3 < 300){
contador3 += 3;
document.getElementById("n3").innerText = contador3;
}

}, 30);
