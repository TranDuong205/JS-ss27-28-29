function chuoiCon(str) {
    var result = [];
    for (var i = 0; i < str.length; i++)
        for (var j = i + 1; j <= str.length; j++)
            result.push(str.slice(i, j));
    return result;
}

var inputChuoi = prompt('Nhập vào một chuỗi bất kỳ:');
console.log('Kết quả:', chuoiCon(inputChuoi));
