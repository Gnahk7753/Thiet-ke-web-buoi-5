// Ham xoa dong tuong ung khi bam nut Xoa
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}