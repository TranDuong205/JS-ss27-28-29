function timCapSoTongBang(mang, soNhapVao) {
    for (var i = 0; i < mang.length - 1; i++) {
        for (var j = i + 1; j < mang.length; j++) {
            if (mang[i] + mang[j] === soNhapVao) {
                return [mang[i], mang[j]];
            }
        }
    }
    return null; 
}
var mangSoNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var soNhapVao = parseInt(prompt('Nhập vào một số nguyên:'));
var ketQua = timCapSoTongBang(mangSoNguyen, soNhapVao);
if (ketQua !== null) {
    console.log(`Cặp số trong mảng có tổng bằng ${soNhapVao}: ${ketQua[0]} và ${ketQua[1]}`);
} else {
    console.log(`Không tìm thấy cặp số trong mảng có tổng bằng ${soNhapVao}.`);
}
