var mangPhanTu = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8];
var demPhanTu = {};

mangPhanTu.forEach(function (phanTu) {
    demPhanTu[phanTu] = (demPhanTu[phanTu] || 0) + 1;
});

var phanTuDuyNhat = mangPhanTu.find(phanTu => demPhanTu[phanTu] === 1);

if (typeof phanTuDuyNhat !== 'undefined') {
    console.log('Phần tử đầu tiên độc nhất trong mảng là: ', phanTuDuyNhat);

    var phanTuThuHai = mangPhanTu.find(phanTu => phanTu !== phanTuDuyNhat && demPhanTu[phanTu] === 1);
    console.log('Phần tử thứ hai độc nhất trong mảng là: ', phanTuThuHai || 'Không có phần tử thứ hai.');
} else {
    console.log('Không có phần tử độc nhất trong mảng.');
}
