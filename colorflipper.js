const btn = document.getElementById("btn");
const colors = [ "blue", "red", "green", "purple", "orange", "pink", "grey", "lightblue" ];
const color = document.querySelector("#color");

function changeBg(){
   return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", ()=>{
    const randomColor = changeBg();
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
})


