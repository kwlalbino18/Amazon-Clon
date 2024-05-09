// Seleccionamos todos los elementos img de la clase header-slider ul
//Recuerda el .... al trabajar en js
const imgs= document.querySelectorAll(".header-slider ul img");  
const prev_btn= document.querySelector(".control_prev");
const next_btn= document.querySelector(".control_next");



let n= 0;

//funcion para el cambio de imagen
function changeSlide(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display= 'none';
    }

    imgs[n].style.display= 'block';
}
changeSlide();

prev_btn.addEventListener("click", (e)=>{
  if(n>0){
  n--;
  }else{
    n=imgs.length-1;
  }
  changeSlide();
})


next_btn.addEventListener("click", (e)=>{
    if(n<imgs.length-1){
    n++;
    }else{
    n=0;
    }
    changeSlide();
})