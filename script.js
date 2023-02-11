

const operations = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: "+"},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: "-"},
    {value: 7},
    {value: 8},
    {value: 9},
    {value: 0},
    {value: "."},
    {value: "/"},
    {value: "="},
    {value: "*"},
    {value: "AC"}
]

let buttons = document.getElementById("numberButtons");
let UserInput = document.getElementById("UserInput");
let output = document.getElementById("Output");
let historyTable = document.querySelector('historyTable')

operations.forEach(playCalc);

function playCalc(element, index, array){
    let button = document.createElement("div");
    button.setAttribute("value", element.value);
    button.setAttribute("id", element.value);
    button.innerText = element.value;
    buttons.append(button);
    button.addEventListener("click", uploadInput);



    function uploadInput(){
        if(element.value != "AC" && element.value != "=")
        {
            UserInput.innerText += element.value;
        }
        else if(element.value == "AC")
        {
            UserInput.innerText = "";
            output.innerText = "";
        }
        if(element.value == "=")
        {
            output.innerText = eval(UserInput.innerText) 
        }
    }

  

}