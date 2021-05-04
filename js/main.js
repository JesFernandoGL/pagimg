let indice = 1;
const imgBack = document.querySelector('#backimg');

imgBack.style.backgroundImage = `url('../img/inet${indice}.jpg')`;


function cambiarImg(){
    indice++;
    if(indice > 3){
        indice = 1
    }    
    imgBack.style.backgroundImage = `url('../img/inet${indice}.jpg')`;
}

let carInterval = setInterval(cambiarImg,3000);