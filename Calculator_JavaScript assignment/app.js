// get the number in input label
function getNumber(num) {
    var inputValue = document.getElementById("inputValue");
    inputValue.value += num;  
}


// clear input function 
function clearInput() {
    var inputValue = document.getElementById("inputValue");
    inputValue.value = "";
    var outputValue = document.getElementById("outputValue");
    outputValue.value = "0";
}


// backspace function 
function backspace() {
    var value = document.getElementById("inputValue").value;
    document.getElementById("inputValue").value = value.substr(0, value.length - 1); 
}


// output label funtion and evaluate value
function getOutput() {
    var outputValue = document.getElementById("outputValue");
    outputValue.value = 0;
    outputValue.value = eval(inputValue.value);
}

