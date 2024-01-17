function coTheTaoChuoi(chuoiKhaiBao, chuoiNhapVao) {
    var mangKyTuKhaiBao = chuoiKhaiBao.split('');
    var mangKyTuNhapVao = chuoiNhapVao.split('');
    for (var i = 0; i < mangKyTuNhapVao.length; i++) {
        var kyTuHienTai = mangKyTuNhapVao[i];
        if (!mangKyTuKhaiBao.includes(kyTuHienTai)) {
            return false;
        }
    }

    return true;
}
var chuoiKhaiBao = "abcdefg";
var chuoiNhapVao = prompt('Nhập vào một chuỗi:');
var ketQua = coTheTaoChuoi(chuoiKhaiBao, chuoiNhapVao);
console.log(`Có thể tạo ra chuỗi '${chuoiNhapVao}' từ chuỗi khai báo không? ${ketQua}`);
