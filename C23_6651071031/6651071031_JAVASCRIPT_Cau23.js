// Ham tinh luong
function tinhLuong() {
    // Lấy gia tri luong va he so
    var luong = parseFloat(document.getElementById("luong").value);
    var heSo = parseFloat(document.getElementById("heSo").value);
    
    if (isNaN(luong) || isNaN(heSo)) {
        alert("Vui lòng nhập số hợp lệ");
        return;
    }
    
    var luongThang = luong * heSo;
    document.getElementById("luongThang").value = luongThang;
}