// Ham lay thu
function xuatThu() {
    // Lay gia tri ngay thang nam
    var d = parseInt(document.getElementById("day").value);
    var m = parseInt(document.getElementById("month").value);
    var y = parseInt(document.getElementById("year").value);
    
    // Mang thu
    var thuArr = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    
    // Khoi tao doi tuong
    var dateObj = new Date(y, m - 1, d);
    
    var dayOfWeek = dateObj.getDay();
    var tenThu = thuArr[dayOfWeek];
    
    // Tra ve gia tri
    var traVe = tenThu + " Ngày " + d + " tháng " + m + " năm " + y;
    document.getElementById("result").innerText = traVe;
}