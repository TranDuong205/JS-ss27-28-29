function demSoKyTu(chuoi) {
    return chuoi.replace(/\s/g, '').length;
}

var chuoiKhaiBao = "Hello, world! This is a sample string.";
var ketQua = demSoKyTu(chuoiKhaiBao);
console.log('Số ký tự trong chuỗi (không tính ký tự trống):', ketQua);
