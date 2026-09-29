// Ham thuc hien phep nhan
function multiply() {
    // Lay gia tri
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    // Kiem tra
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Vui lòng nhập 2 số!";
        return;
    }
    
    var traVe = num1 * num2;
    document.getElementById("result").innerText = traVe;
}

// Ham thuc hien phep chia
function divide() {
    // Lay gia tri
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    // Kiem tra
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Vui lòng nhập 2 số!";
        return;
    }
    
    if (num2 === 0) {
        document.getElementById("result").innerText = "Không thể chia cho 0!";
        return;
    }
    
    var traVe = num1 / num2;
    document.getElementById("result").innerText = traVe;
}