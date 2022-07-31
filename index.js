function displayCard (){
    
      document.getElementById("card1").style.display = "none";
      document.getElementById("card2").style.display = "block";
}
document.getElementById("buttons").addEventListener( "click",({target})=>{

const displayRating = document.getElementById("displayRating")
    displayRating.innerHTML = `You selected ${target.value} of 5 `;
    target.style.backgroundColor = "hsl(216, 12%, 54%)";
    target.style.color = "white";
    target.style.fontWeight = "400";
    target.style.fontSize = "1.5rem";
    
})