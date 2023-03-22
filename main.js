var btns=document.querySelectorAll(".btn-danger");
console.log("btns avant", btns)
for (let i = 0; i < btns.length; i++) {
    console.log("hiii")
    btns[i].addEventListener("click", function () {
        console.log("helloooo")

        //let text = prompt("what's your name");
        //console.log(text)

      console.log(btns[i].parentNode.parentNode.remove());  
      console.log("btns apres", btns)
    })
    
}

var hearts=document.querySelectorAll(".fa-heart");
for (const heart of hearts) {
    heart.addEventListener("dblclick", function () {
    /*if(heart.style.color=="red"){
        heart.style.color="black"
        heart.style.fontSize="10px"
    }
    else{
    heart.style.color="red"; 
    heart.style.fontSize="30px"
    }*/
    heart.classList.toggle("fa-red")
    }) 
    
}
