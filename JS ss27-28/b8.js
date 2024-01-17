function mangConPhanBiet(arr) {
    return arr.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
}

var mangDaKhaiBao = [1, 2, 1, 3, 4, "f"];
var ketQua = mangConPhanBiet(mangDaKhaiBao);
console.log('Kết quả:', ketQua);
