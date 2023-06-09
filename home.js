
let lists=document.getElementsByClassName("item");
let rightContainer= document.getElementById("rightdiv");
let leftContainer= document.getElementById("leftdiv");
let resetButton = document.getElementById("resetButton");
let initialState = document.getElementById('leftdiv').innerHTML;

// function to drag all items
function setEvent (){
    for(item of lists)
    {
        item.addEventListener("dragstart", function(e){
            let selected=e.target;
         
            rightContainer.addEventListener("dragover", function(e){
                e.preventDefault();
            });
        
            rightContainer.addEventListener("drop", function(e){
            
                rightContainer.appendChild(selected);
                alert("SUCCEFULLY DRAGGED");
            selected=null;
            })
        })
    }
}
setEvent();
resetButton.addEventListener("click", reset);
function reset() {
    rightContainer.innerHTML = "";
    leftContainer.innerHTML = initialState;
    setEvent(); 
}