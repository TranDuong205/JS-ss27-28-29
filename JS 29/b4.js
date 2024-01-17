function demSoLanXuatHien(chuoi, kyTu) {
    var dem = 0;
    for (var i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTu) {
            dem++;
        }
    }
    return dem;
}
var chuoiNhap = prompt('Nhập vào một chuỗi:');
var kyTuNhap = prompt('Nhập vào một ký tự:');
var ketQua = demSoLanXuatHien(chuoiNhap, kyTuNhap);
console.log(`Số lần xuất hiện của ký tự '${kyTuNhap}' trong chuỗi là: ${ketQua}`);
