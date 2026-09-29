// Mang danh sach 10 Can va 12 Chi
var canArr = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
var chiArr = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

// Ham kiem tra hop le va tinh Can Chi
function tinhCanChi() {
    var yearInput = document.getElementById("yearInput").value.trim();
    var yearVal = parseInt(yearInput);
    
    // Validate nam phai la so nguyen duong hop le
    if (yearInput === "" || isNaN(yearVal) || yearVal <= 0) {
        alert("Vui lòng nhập 1 năm nguyên hợp lệ!");
        return;
    }
    
    var can = canArr[yearVal % 10];
    var chi = chiArr[yearVal % 12];
    
    document.getElementById("resultCanChi").value = can + " " + chi;
}