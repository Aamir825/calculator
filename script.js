


let buttons = document.querySelectorAll(".buttons-area .btn button");
let display = document.getElementById("display");
let result = document.getElementById("result");
buttons.forEach((btn)=>{
    btn.addEventListener("click", (data)=>{
        // console.log(data.target.value);
        let btnData = data.target.value;
        display.value += btnData;
    })
})

let Calculate = () =>{
    result.value = eval(display.value)
}

let ClearData = () =>{
    display.value = "";
    result.value = "";
}

console.log(eval("80-51-2"))
