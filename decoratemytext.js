window.addEventListener("load", function () {
    document.getElementById("clickMe").onclick = timmer;
    document.getElementById("myCheckBox").onchange  = function (){
        let checkBox = document.getElementById("myCheckBox");
        if(checkBox.checked){
            document.getElementById("myTextArea").style.fontWeight = "bold";
            document.getElementById("myTextArea").style.color = "green";
            document.getElementById("myTextArea").style.textDecoration = "underline";
        }else{
            document.getElementById("myTextArea").style.fontWeight = "normal";
            document.getElementById("myTextArea").style.color = "black";
            document.getElementById("myTextArea").style.textDecoration = "none";
        }
        // myAlert();
    };
});

function myAlert() {
    alert("Hello, world!");
}

function timmer() {
    setInterval(biggerFont, 500);
}

function biggerFont(){
    let myTextArea = document.getElementById("myTextArea");
    let size = parseInt(window.getComputedStyle(myTextArea, null).getPropertyValue("font-size"));
    size += 2;
    myTextArea.style.fontSize = size + "pt";
    // myAlert();
}
