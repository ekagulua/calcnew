function takeValue(x) {
    document.getElementById('inputdisplay').value += x;
}

function clearInput(y) {
    document.getElementById('inputdisplay').value = y;
}

function calculateResult() {
    var result = eval(document.getElementById('inputdisplay').value);
    document.getElementById('inputdisplay').value = result;
}
