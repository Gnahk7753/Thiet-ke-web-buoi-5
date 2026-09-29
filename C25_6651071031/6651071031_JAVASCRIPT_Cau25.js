// Ham tinh tong tien
function tinhTien() {
    // Lay thong tin mon an
    var foodSelect = document.getElementById("foods");
    var drinkSelect = document.getElementById("drinks");
    var isNight = document.getElementById("night").checked;
    
    var usedItemsBody = document.getElementById("usedItems");
    usedItemsBody.innerHTML = "";
    
    var tongTien = 0;
    
    // Duyet qua cac mon an duoc chon
    for (var i = 0; i < foodSelect.options.length; i++) {
        var optAn = foodSelect.options[i];
        if (optAn.selected) {
            var giaAn = parseInt(optAn.value);
            tongTien += giaAn;
            
            var row = "<tr><td>" + optAn.text + "</td><td>" + giaAn + "</td></tr>";
            usedItemsBody.innerHTML += row;
        }
    }
    
    // Duyet qua cac mon uong duoc chon
    for (var j = 0; j < drinkSelect.options.length; j++) {
        var optNuoc = drinkSelect.options[j];
        if (optNuoc.selected) {
            var giaNuoc = parseInt(optNuoc.value);
            tongTien += giaNuoc;
            
            var rowD = "<tr><td>" + optNuoc.text + "</td><td>" + giaNuoc + "</td></tr>";
            usedItemsBody.innerHTML += rowD;
        }
    }
    
    // Tinh them 10% neu dung vao ban dem
    var tongTienCuoi = tongTien;
    if (isNight) {
        tongTienCuoi = tongTien * 1.1;
    }
    
    document.getElementById("total").innerText = tongTienCuoi + " đồng";
}