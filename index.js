let homeDisplay= document.getElementById("home-display");
let guestDisplay = document.getElementById("guest-display");
let homeButts= document.querySelectorAll(".butt-home");
let guestButts=document.querySelectorAll(".butt-guest")


homeButts.forEach((butt)=>{
    butt.addEventListener("click",()=>{
    homeDisplay.textContent=+homeDisplay.textContent+(+butt.textContent) 
     markleader();  
    })
})
guestButts.forEach((butt)=>{
    butt.addEventListener("click",()=>{

    guestDisplay.textContent=+guestDisplay.textContent+(+butt.textContent);
    markleader();
    })
})
function markleader(){
    if(homeDisplay.textContent== guestDisplay.textContent){
       homeDisplay.classList.remove("leader")
       guestDisplay.classList.remove("leader") 
    }
    if(homeDisplay.textContent> guestDisplay.textContent){
      homeDisplay.classList.add("leader")
       guestDisplay.classList.remove("leader") 
    }
    else if (homeDisplay.textContent< guestDisplay.textContent){
      homeDisplay.classList.remove("leader")
       guestDisplay.classList.add("leader") 
    }
}

