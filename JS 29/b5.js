function timChuoiTrongMang(mang, chuoi) {
    var ketQua = [];
    for (var i = 0; i < mang.length; i++) {
        if (mang[i].includes(chuoi)) {
            ketQua.push(mang[i]);
        }
    }
    return ketQua;
}
var mangChuoi = ["apple", "banana", "orange", "kiwi", "grape"];
var chuoiNhap = prompt('Nhập vào một chuỗi:');
var ketQua = timChuoiTrongMang(mangChuoi, chuoiNhap);
console.log(`Các phần tử trong mảng chứa chuỗi '${chuoiNhap}':`, ketQua);
