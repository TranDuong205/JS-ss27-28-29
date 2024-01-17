function phanTuCoDoDaiLonNhat(arr) {
    if (arr.length === 0) {
        return "Mảng rỗng, không có phần tử.";
    }

    let phanTuLonNhat = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > phanTuLonNhat.length) {
            phanTuLonNhat = arr[i];
        }
    }

    return phanTuLonNhat;
}

var mangNgauNhien = ["apple", "banana", "orange", "kiwi", "grape"];
var ketQua = phanTuCoDoDaiLonNhat(mangNgauNhien);
console.log('Phần tử có độ dài lớn nhất trong mảng là:', ketQua);
