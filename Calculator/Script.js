let screen = document.getElementById("display");
let buttons = document.querySelectorAll("input");
for(let item of buttons){
    item.addEventListener("click",function(event){
        buttonText = event.target.value;
        switch(buttonText)
        {
            case "AC" : screen.value = "";
            break;
            case "=" :screen.value = eval(screen.value);
            break; 
            case "Del" : screen.value = screen.value.slice(0,-1);
            break;
            default :  screen.value += buttonText;
            break;          
         }
    })
}
