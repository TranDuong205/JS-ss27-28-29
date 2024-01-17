function vietHoaChuCaiDau(chuoi) {
    return chuoi.replace(/\b\w/g, function (ch) {
        return ch.toUpperCase();
    });
}

var chuoiKhaiBao = "hello world! this is a sample string.";
var ketQua = vietHoaChuCaiDau(chuoiKhaiBao);
console.log('Chuỗi sau khi viết hoa chữ cái đầu:', ketQua);
